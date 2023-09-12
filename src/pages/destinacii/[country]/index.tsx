import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import SeeMoreBtn from "@/components/SeeMoreBtn";
import Trending from "@/components/CarousellMain";
import { Arangement, DropdownDestinationType } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type CountryProps = {
  hotels: Arangement[];
  apartments: Arangement[];
  titleInfo: DropdownDestinationType[];
};

const Country: NextPage<CountryProps> = ({
  apartments = [],
  hotels = [],
  titleInfo,
}) => {
  const title = titleInfo[0];

  return (
    <>
      <Head>
        <title>{title.text}</title>
        <meta
          name="description"
          content={`Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации ${title.text}`}
        />
        <meta
          name="keywords"
          content={`${title.text} Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation`}
        />
      </Head>

      <Banner image={"greceBanner.jpg"} />
      <SectionTitle text={`${title.text} Апартмани`} />
      <Trending arangements={apartments} type={"destination"} />
      <SeeMoreBtn destination={`/destinacii/${title.textEn}/Apartment`} />
      <SectionTitle text={`${title.text} Хотели`} />
      <Trending arangements={hotels} type={"destination"} />
      <SeeMoreBtn destination={`/destinacii/${title.textEn}/Hotel`} />
    </>
  );
};

export default Country;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const destination = context.query.country;

  console.log(destination);

  try {
    const [hotelsRes, apartmentsRes, titleInfoRes] = await Promise.all([
      fetch(
        `http://localhost:4000/arangements?isPublished_like=true&state_like=free&country_like=${destination}&type_like=Hotel`
      ),
      fetch(
        `http://localhost:4000/arangements?isPublished_like=true&state_like=free&country_like=${destination}&type_like=Apartment`
      ),
      fetch(
        `http://localhost:4000/dropdown-destinations?textEn_like=${destination}`
      ),
    ]);

    const [hotels, apartments, titleInfo] = await Promise.all([
      hotelsRes.json(),
      apartmentsRes.json(),
      titleInfoRes.json(),
    ]);

    return {
      props: {
        hotels,
        apartments,
        titleInfo,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
