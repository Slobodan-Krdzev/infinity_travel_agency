import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import SeeMoreBtn from "@/components/SeeMoreBtn";
import Trending from "@/components/CarousellMain";
import { Arangement } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { ALL_ARANGEMENTS } from "@/constants/constants";

type ExoticDestinationsProps = {
  destinations: Arangement[];
};

const ExoticDestinations: NextPage<ExoticDestinationsProps> = ({
  destinations = [],
}) => {
  return (
    <>
      <Head>
        <title>Егзотични Дестинации</title>
        <meta
          name="description"
          content={`Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации Екзотични`}
        />
        <meta
          name="keywords"
          content={`Егзотични Дестинации Малдиви Бали Куба Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation`}
        />
      </Head>

      <Banner image={"exoticBanner.jpg"} />
      <SectionTitle text={"Егзотични Дестинации"} />
      <Trending arangements={destinations} type={"destination"} />
      <SeeMoreBtn destination={`/destinacii/Exotic/Exotic`} />
    </>
  );
};

export default ExoticDestinations;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const destinationsRes = await fetch(
      `${ALL_ARANGEMENTS}?type_like=Exotic&isPublished=true&state=free`
    );
    const destinations = await destinationsRes.json();

    return {
      props: {
        destinations,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
