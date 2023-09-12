import { Arangement } from "@/types/types";
import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import CarousellArangements from "./CarousellArangements";
import TrendingBtn from "./TrendingBtn";

type TrendingProps = {
  arangements: Arangement[];
  type: "izlet" | "destination";
};

const Trending = ({ arangements = [], type }: TrendingProps) => {
  const [arangementsForCarousell, setArangementsForCarousell] = useState<
    Arangement[]
  >([]);
  const [activeFilter, setActiveFilter] = useState("Сите");

  const trendingBtns = arangements.map((arangement) => arangement.region);
  const filteredBtns = [...new Set(trendingBtns), "Last Minute", "Сите"];

  useEffect(() => {
    setArangementsForCarousell(arangements);
  }, [arangements]);

  const handleFilteringArangements = (filter: string) => {
    let filteredArangements: Arangement[] = [];

    if (filter === "Last Minute") {
      filteredArangements = arangements.filter(
        (arangement) => arangement.isLastMinute === true
      );
    } else if (filter === "Сите") {
      filteredArangements = arangements.filter(
        (arangement) => arangement.isPublished === true
      );
    } else {
      filteredArangements = arangements.filter(
        (arangement) => arangement.region === filter
      );
    }

    setArangementsForCarousell(filteredArangements);
    setActiveFilter(filter);
  };

  return (
    <section>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        sx={{
          width: "70%",
          margin: "2rem auto 0",
        }}
      >
        {filteredBtns.map((btn) => (
          <TrendingBtn
            key={btn}
            text={btn}
            filter={btn}
            filterHandler={handleFilteringArangements}
            activeFilter={activeFilter}
          />
        ))}
      </Stack>
      <CarousellArangements arangements={arangementsForCarousell} type={type} />
    </section>
  );
};

export default Trending;
