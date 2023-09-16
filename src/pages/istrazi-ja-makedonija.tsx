import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import SeeMoreBtn from "@/components/SeeMoreBtn";
import Trending from "@/components/CarousellMain";
import { Arangement } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { ALL_ARANGEMENTS } from "@/constants/constants";

type ExploreMacedoniaProps = {
  arangementsFromMacedonia: Arangement[];
  izleti: Arangement[];
};

const ExploreMacedonia: NextPage<ExploreMacedoniaProps> = ({
  arangementsFromMacedonia = [],
  izleti = [],
}) => {
  return (
    <>
      <Head>
        <title>Истражи ја Македонија</title>
        <meta
          name="description"
          content={`Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации Team-Building`}
        />
        <meta
          name="keywords"
          content={`Македониски-Туризам Групни Патувања Тим-Билдинг Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation Team-Building`}
        />
      </Head>

      <Banner image={"mkdBanner.jpg"} />

      <SectionTitle text={"Истражи ја Македонија"} />
      <Trending arangements={arangementsFromMacedonia} type="destination" />
      <SeeMoreBtn destination={"/destinacii/Macedonia/Hotel"} />
      <SectionTitle text={"Излети"} />
      <Trending arangements={izleti} type={"izlet"} />
      <SeeMoreBtn destination={"/izleti"} />
    </>
  );
};

export default ExploreMacedonia;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [arangementsFromMacedoniaRes, izletiRes] = await Promise.all([
      fetch(
        `${ALL_ARANGEMENTS}?country_like=Macedonia&isPublished_like=true&type_like=hotel&type_like=apartment`
      ),
      fetch(
        `${ALL_ARANGEMENTS}?country_like=Macedonia&isPublished_like=true&type_like=izlet`
      ),
    ]);

    const [arangementsFromMacedonia, izleti] = await Promise.all([
      arangementsFromMacedoniaRes.json(),
      izletiRes.json(),
    ]);

    return {
      props: {
        arangementsFromMacedonia,
        izleti,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
