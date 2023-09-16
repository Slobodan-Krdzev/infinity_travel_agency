import Banner from "@/components/Banner";
import { Inter } from "next/font/google";
import Head from "next/head";

import GroupTravelBannerSection from "@/components/GroupTravelBannerSection";
import Moments from "@/components/Moments";
import PaperSection from "@/components/PaperSection";
import SectionTitle from "@/components/SectionTitle";
import SeeMoreBtn from "@/components/SeeMoreBtn";
import Testemonials from "@/components/Testemonials";
import Trending from "@/components/CarousellMain";
import { ARANGEMENTS_PUBLISHED_FREE, GALERY_ENDPOINT, TESTEMONIALS_ENDPOINT } from "@/constants/constants";
import { Arangement, GaleryImageType, TestemonialType } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";

const inter = Inter({ subsets: ["latin"] });

type HomeProps = {
  allArangements: Arangement[];
  testemonials: TestemonialType[];
  galeryImages: GaleryImageType[];
};

const Home: NextPage<HomeProps> = ({
  allArangements = [],
  testemonials = [],
  galeryImages = [],
}) => {
  return (
    <>
      <Head>
        <title>Инфинити Травел</title>
        <meta
          name="description"
          content={`Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации Team-Building`}
        />
        <meta
          name="keywords"
          content={`Македониски-Туризам Патничко Осигурување Сигурност Групни Патувања Тим-Билдинг Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation Team-Building`}
        />
      </Head>

      <Banner image={"homeBanner.jpg"} />
      <SectionTitle text={"Актуелни Понуди"} />

      <Trending arangements={allArangements} type="destination" />
      <SeeMoreBtn destination={"/destinacii/Grece/Apartment"} />

      <GroupTravelBannerSection />
      <PaperSection />
      <Testemonials testemonials={testemonials} />
      <Moments images={galeryImages} />
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const [allArangementsRes, testemonialsRes, galeryImagesRes] =
      await Promise.all([
        fetch(
          `${ARANGEMENTS_PUBLISHED_FREE}&isTrending_like=true`
        ),
        fetch(TESTEMONIALS_ENDPOINT),
        fetch(GALERY_ENDPOINT),
      ]);

    const [allArangements, testemonials, galeryImages] = await Promise.all([
      allArangementsRes.json(),
      testemonialsRes.json(),
      galeryImagesRes.json(),
    ]);

    return {
      props: {
        allArangements,
        testemonials,
        galeryImages,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
