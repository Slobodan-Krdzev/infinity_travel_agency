import ArangementCardListing from "@/components/ArangementCardListing";
import Banner from "@/components/Banner";
import DesktopFilters from "@/components/DesktopFilters";
import MobileFilters from "@/components/MobileFilters";
import SectionTitle from "@/components/SectionTitle";
import { ARANGEMENTS_PUBLISHED_FREE } from "@/constants/constants";
import { Arangement } from "@/types/types";
import { Grid, useMediaQuery } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

type AcomodationProps = {
  arangements: Arangement[];
  country: string;
};

const Acomodation: NextPage<AcomodationProps> = ({
  arangements = [],
  country,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const breakpoint = useMediaQuery("(min-width:899px)");

  const handleFilters = (state: boolean) => {
    setShowFilters(state);
  };

  const { query } = useRouter();

  const countryMkd = arangements.length > 0 ? arangements[0].countryMkd : "";

  return (
    <>
      <Head>
        <title>{countryMkd ? countryMkd : ""}</title>
        <meta
          name="description"
          content={`Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации ${countryMkd}`}
        />
        <meta
          name="keywords"
          content={`${countryMkd} Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Banner image={"greceBanner.jpg"} />

      {query.acomodationType === "Hotel" && (
        <SectionTitle text={`${countryMkd} Хотели`} />
      )}
      {query.acomodationType === "Apartment" && (
        <SectionTitle text={`${countryMkd} Апартмани`} />
      )}
      {query.acomodationType === "Exotic" && (
        <SectionTitle text={`Егзотични Дестинации`} />
      )}

      <Grid
        container
        sx={{
          width: "90%",
          margin: "0 auto",
          padding: "2rem 0",
          position: "relative",
        }}
      >
        {breakpoint ? (
          <DesktopFilters showSearch={true} />
        ) : (
          <MobileFilters
            showFilters={handleFilters}
            filtersState={showFilters}
          />
        )}

        <div
          style={{
            position: "absolute",
            width: "100%",
            top: "5%",
            left: !breakpoint && showFilters ? 0 : -2000,
            opacity: !breakpoint && showFilters ? 1 : 0,
            zIndex: 99999,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <DesktopFilters showSearch={false} />
        </div>
        <ArangementCardListing
          arangements={arangements}
          visibility={showFilters}
        />
      </Grid>
    </>
  );
};

export default Acomodation;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const country = context.query.country as string;
  const acomodationType = context.query.acomodationType;
  const nameOfArangement = context.query.name_like as string;
  const lowPriceOfArangement = context.query.priceLow as string;
  const highPriceOfArangement = context.query.priceHigh as string;

  const finalizQuery = (
    country: string,
    name: string,
    lowPrice: string,
    highPrice: string
  ) => {
    if (country && acomodationType && name && lowPrice && highPrice) {
      return `${ARANGEMENTS_PUBLISHED_FREE}&country_like=${country}&type_like=${acomodationType}&startingPrice_gte=${lowPrice}&startingPrice_lte=${highPrice}&name_like=${name}`;
    } else if (country === "Exotic") {
      if (name && lowPrice && highPrice) {
        return `${ARANGEMENTS_PUBLISHED_FREE}&type_like=${country}&name_like=${name}&startingPrice_gte=${lowPrice}&startingPrice_lte=${highPrice}`;
      } else if (lowPrice && highPrice) {
        return `${ARANGEMENTS_PUBLISHED_FREE}&type_like=${country}&startingPrice_gte=${lowPrice}&startingPrice_lte=${highPrice}`;
      }
      return `${ARANGEMENTS_PUBLISHED_FREE}&type_like=${country}`;
    } else if (lowPrice && highPrice) {
      return `${ARANGEMENTS_PUBLISHED_FREE}&country_like=${country}&type_like=${acomodationType}&startingPrice_gte=${lowPrice}&startingPrice_lte=${highPrice}`;
    } else if (name) {
      return `${ARANGEMENTS_PUBLISHED_FREE}&country_like=${country}&type_like=${acomodationType}&name_like=${name}`;
    } else {
      return `${ARANGEMENTS_PUBLISHED_FREE}&country_like=${country}&type_like=${acomodationType}`;
    }
  };
  try {
    const [arangementsRes] = await Promise.all([
      fetch(
        finalizQuery(
          country,
          nameOfArangement,
          lowPriceOfArangement,
          highPriceOfArangement
        )
      ),
    ]);

    const [arangements] = await Promise.all([arangementsRes.json()]);

    return {
      props: {
        arangements,
        country,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};
