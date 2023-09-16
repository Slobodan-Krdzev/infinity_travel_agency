import ArangementPricesTable from "@/components/ArangementPricesTable";
import Banner from "@/components/Banner";
import CarousellPictures from "@/components/CarousellPictures";
import SectionTitle from "@/components/SectionTitle";
import { ALL_ARANGEMENTS } from "@/constants/constants";
import DefaultTheme from "@/styles/DefaultTheme";
import { Arangement } from "@/types/types";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

type ArangementDetailsPageProps = {
  arangement: Arangement[];
};

const ArangementDetailsPage: NextPage<ArangementDetailsPageProps> = ({
  arangement,
}) => {
  const {
    name,
    description,
    transportationDescription,
    priceForNights,
    prices,
    region,
    country,
    gallery,
    availabilityDates,
    type,
  } = arangement[0];

  const breakpoint = useMediaQuery("(min-width:769px)");

  return (
    <>
      <Head>
        <title>{name}</title>
        <meta
          name="description"
          content={`Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации ${name}`}
        />
        <meta
          name="keywords"
          content={`${name} Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation`}
        />
      </Head>

      <Banner image={"greceBanner.jpg"} />
      <SectionTitle text={name} />

      <section
        style={{
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Stack
          direction={breakpoint ? "row" : "column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          marginBottom={breakpoint ? "2rem" : 0}
        >
          <Stack
            direction={"row"}
            spacing={3}
            marginBottom={breakpoint ? 0 : "1rem"}
          >
            <Link href={"#description"} className="link link-bold">
              Опис
            </Link>
            <Link href={"#picturesCarousell"} className="link link-bold">
              Галерија
            </Link>
            <Link href={"#prices"} className="link link-bold">
              Цени
            </Link>
            <Link href={"#transport"} className="link link-bold">
              Превоз
            </Link>
          </Stack>

          <Typography
            variant="h4"
            color={DefaultTheme.palette.warning.dark}
            alignSelf={breakpoint ? "" : "flex-start"}
          >
            {" "}
            <LocationOnOutlinedIcon /> {region}, {country}
          </Typography>
        </Stack>

        <Typography variant="h2" component={"h2"} id="description">
          {name}
        </Typography>
        <Typography variant="h6" component={"p"}>
          {description}
        </Typography>
        <Typography variant="h6" component={"p"}>
          Цените се изразени во EUR за уплата во денарска противвредност
          (1EUR=62MKD). <br /> * За резервација со EB попуст, 50% од вредноста
          на аранжманот се уплатува во моментот на правење на резервацијата.{" "}
          <br />* Можност за користење на неискористените ваучери од Лето 2020.
        </Typography>
        <section id="picturesCarousell">
          <CarousellPictures galery={gallery} />
        </section>
        {type !== "Izlet" && (
          <section id="prices">
            <ArangementPricesTable
              dates={availabilityDates}
              nights={priceForNights}
              prices={prices}
            />
          </section>
        )}

        <section id="transport">
          <Typography variant="h2" component={"h3"}>
            Превоз
          </Typography>
          <Typography variant="h6" component={"p"}>
            {transportationDescription}
          </Typography>
        </section>
      </section>
    </>
  );
};

export default ArangementDetailsPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(ALL_ARANGEMENTS);
  const data: Arangement[] = await res.json();

  const paths = data.map((arangment) => {
    return {
      params: {
        id: arangment.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;

  try {
    const arangementRes = await fetch(`${ALL_ARANGEMENTS}?id=${id}`);
    const arangement = await arangementRes.json();

    return {
      props: {
        arangement,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
