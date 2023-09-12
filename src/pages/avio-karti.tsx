import Banner from "@/components/Banner";
import FlightConfirmationContactForm from "@/components/FlightConfirmationContactForm";
import FlightSearchForm from "@/components/FlightSearchForm";
import SectionTitle from "@/components/SectionTitle";
import { FlightSearchDataBodyType } from "@/types/types";
import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

const AvioKarti: NextPage = () => {
  const [isSearchFormFinished, setisSearchFormFinished] = useState(false);
  const [searchFlightFormData, setSearchFlightFormData] = useState<
    FlightSearchDataBodyType | undefined
  >(undefined);

  const handleSubmit = (postBody: FlightSearchDataBodyType) => {
    setisSearchFormFinished(!isSearchFormFinished);

    setSearchFlightFormData(postBody);
  };

  return (
    <>
      <Head>
        <title>Авио Карти</title>
        <meta
          name="description"
          content={`Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации`}
        />
        <meta
          name="keywords"
          content={`Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation Авио-Карти Летови`}
        />
      </Head>

      <Banner image={"airlineBanner.jpg"} />
      <SectionTitle text={"Авионски Карти"} />

      {isSearchFormFinished ? (
        <FlightConfirmationContactForm
          flightSearchFormData={searchFlightFormData}
        />
      ) : (
        <FlightSearchForm action={handleSubmit} />
      )}
    </>
  );
};

export default AvioKarti;
