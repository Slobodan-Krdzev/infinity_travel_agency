import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import TextImageSection from "@/components/TextImageSection";
import { GRUPNI_INFO } from "@/constants/constants";
import { GroupTravelInfoType } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type GrupniPatuvanjaProps = {
  data: GroupTravelInfoType;
};

const GrupniPatuvanja: NextPage<GrupniPatuvanjaProps> = ({
  data: {
    miceTourismTitle,
    miceTourismDesc,
    miceTourismImage,
    teamBuildingTitle,
    teamBuildingDesc,
    teamBuildingImage,
    tailorMadeTitle,
    tailorMadeDesc,
    tailorMadeImage,
  },
}) => {
  return (
    <>
      <Head>
        <title>Групни Патувања</title>
        <meta
          name="description"
          content={`Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации Team-Building`}
        />
        <meta
          name="keywords"
          content={`Групни Патувања Тим-Билдинг Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation Team-Building`}
        />
      </Head>

      <Banner image={"groupBanner.jpg"} />
      <SectionTitle text={"Групни Патувања"} />
      <TextImageSection
        title={miceTourismTitle}
        desc={miceTourismDesc}
        image={miceTourismImage}
      />
      <TextImageSection
        pictureLeft={true}
        title={teamBuildingTitle}
        desc={teamBuildingDesc}
        image={teamBuildingImage}
      />
      <TextImageSection
        title={tailorMadeTitle}
        desc={tailorMadeDesc}
        image={tailorMadeImage}
      />
      <ContactForm />
    </>
  );
};

export default GrupniPatuvanja;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const dataRes = await fetch(GRUPNI_INFO);
    const data = await dataRes.json();

    return {
      props: {
        data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
