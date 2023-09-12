import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import SimpleTitleAndText from "@/components/SimpleTitleAndText";
import { PATNICKO_INFO } from "@/constants/constants";
import { PatnickoOsiguruvanjeInfoType } from "@/types/types";
import { Container } from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type PatnickoOsiguruvanjeProps = {
  data: PatnickoOsiguruvanjeInfoType;
};

const PatnickoOsiguruvanje: NextPage<PatnickoOsiguruvanjeProps> = ({
  data: { titleOne, titleTwo, titleThree, textOne, textTwo, textThree },
}) => {
  return (
    <>
      <Head>
        <title>Патничко Осигурување</title>
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
      <SectionTitle text={"Патничко Осигурување"} />
      <Container
        sx={{
          width: "90%",
          margin: "0 auto",
          padding: "2rem 0",
        }}
      >
        <SimpleTitleAndText title={titleOne} desc={textOne} />
        <SimpleTitleAndText title={titleTwo} desc={textTwo} />
        <SimpleTitleAndText title={titleThree} desc={textThree} />
      </Container>
    </>
  );
};

export default PatnickoOsiguruvanje;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const dataRes = await fetch(PATNICKO_INFO);
    const data = await dataRes.json();

    console.log(data);

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
