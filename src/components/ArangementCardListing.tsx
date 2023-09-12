import { Arangement } from "@/types/types";
import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import ArangementCard from "./ArangementCard";

type ArangementCardListingProps = {
  arangements: Arangement[];
  visibility: boolean;
};

const ArangementCardListing = ({
  arangements = [],
  visibility,
}: ArangementCardListingProps) => {
  const breakpoint = useMediaQuery("(min-width:769px)");

  return (
    <Grid
      item
      md={9}
      sm={12}
      xs={12}
      paddingLeft={breakpoint ? "1rem" : ""}
      sx={{
        opacity: visibility ? 0.3 : 1,
      }}
    >
      {arangements.length > 0 ? (
        <Grid container spacing={2}>
          {arangements.map((arangement) => (
            <ArangementCard
              key={arangement.id}
              linkTo={`/aranzmani/${arangement.id}`}
              item={arangement}
              margin={false}
            />
          ))}
        </Grid>
      ) : (
        <Stack alignItems={"center"} justifyContent={"center"}>
          <Image src={logo} alt={"Logo"} />
          <Typography variant="h2" component={"h2"}>
            Нема Резултати
          </Typography>
        </Stack>
      )}
    </Grid>
  );
};

export default ArangementCardListing;
