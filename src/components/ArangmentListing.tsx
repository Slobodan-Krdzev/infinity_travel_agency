import { Arangement } from "@/types/types";
import { Grid } from "@mui/material";
import ArangementCard from "./ArangementCard";

type ArangmentListingProps = {
  arangementsToList: Arangement[];
};

const ArangmentListing = ({
  arangementsToList = [],
}: ArangmentListingProps) => {
  return (
    <Grid
      container
      paddingBottom={"2.5rem"}
      spacing={3}
      sx={{
        width: "90%",
        margin: "0 auto",
      }}
    >
      {arangementsToList.map((arangement) => (
        <ArangementCard
          key={arangement.id}
          linkTo={`/aranzmani/${arangement.id}`}
          item={arangement}
        />
      ))}
    </Grid>
  );
};

export default ArangmentListing;
