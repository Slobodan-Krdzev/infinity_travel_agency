import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import SimpleTitleAndText from "@/components/SimpleTitleAndText";
import { OPSTI_USLOVI_INFO } from "@/constants/constants";
import { OpstiUsloviInfoType } from "@/types/types";
import { Container } from "@mui/material";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";

type OpstiUsloviProps = {
  data: OpstiUsloviInfoType;
};

const OpstiUslovi: NextPage<OpstiUsloviProps> = ({
  data: { titleOne, titleTwo, titleThree, textOne, textTwo, textThree },
}) => {
  console.log(titleOne);

  return (
    <>
      <Head>
        <title>Општи Услови</title>
        <meta
          name="description"
          content={`Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации Team-Building`}
        />
        <meta
          name="keywords"
          content={`Општи Услови Македониски-Туризам Групни Патувања Тим-Билдинг Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation Team-Building`}
        />
      </Head>

      <Banner image={"aboutBanner.jpg"} />
      <SectionTitle text={"Општи Услови"} />
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

export default OpstiUslovi;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const dataRes = await fetch(OPSTI_USLOVI_INFO);
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
