import AboutUsSection from "@/components/AboutUsSection";
import Banner from "@/components/Banner";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { ABOUT_US_MID_SECTION_DATA } from "@/constants/constants";
import { AboutUsMidSectionDataType } from "@/types/types";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type ZaNasProps = {
  data: AboutUsMidSectionDataType;
};

const ZaNas: NextPage<ZaNasProps> = ({ data: { title, desc } }) => {
  return (
    <>
      <Head>
        <title>За Нас</title>
        <meta
          name="description"
          content={`Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации Team-Building`}
        />
        <meta
          name="keywords"
          content={`Македониски-Туризам Патничко Осигурување Сигурност Групни Патувања Тим-Билдинг Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation Team-Building`}
        />
      </Head>

      <Banner image={"aboutBanner.jpg"} />
      <SectionTitle text={"За Нас"} />
      <AboutUsSection title={title} desc={desc} />
      <ContactForm />
    </>
  );
};

export default ZaNas;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const dataRes = await fetch(ABOUT_US_MID_SECTION_DATA);
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
