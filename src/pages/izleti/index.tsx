import ArangmentListing from "@/components/ArangmentListing";
import Banner from "@/components/Banner";
import SectionTitle from "@/components/SectionTitle";
import { ALL_ARANGEMENTS } from "@/constants/constants";
import { Arangement } from "@/types/types";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

type TripsProps = {
  allTrips: Arangement[];
};

const Trips: NextPage<TripsProps> = ({ allTrips }) => {
  return (
    <>
      <Head>
        <title>Излети</title>
        <meta
          name="description"
          content={`Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации `}
        />
        <meta
          name="keywords"
          content={`Излет Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation`}
        />
      </Head>

      <Banner image={"izletBanner.png"} />
      <SectionTitle text={"Излети"} />
      <ArangmentListing arangementsToList={allTrips} />
    </>
  );
};

export default Trips;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const allTripsRes = await fetch(
      `${ALL_ARANGEMENTS}?type_like=Izlet&isPublished=true`
    );
    const allTrips = await allTripsRes.json();

    return {
      props: {
        allTrips,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
