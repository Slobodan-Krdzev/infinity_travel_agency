import DefaultTheme from "@/styles/DefaultTheme";
import { Grid, Stack } from "@mui/material";
import { useRouter } from "next/router";
import Calendar from "./Calendar";
import FilterAcomodationTypePicker from "./FilterAcomodationTypePicker";
import FilterDestinationPicker from "./FilterDestinationPicker";
import FilterPricePicker from "./FilterPricePicker";
import Searchbar from "./Searchbar";

type DesktopFiltersProps = {
  showSearch: boolean;
};

const DesktopFilters = ({ showSearch }: DesktopFiltersProps) => {
  const router = useRouter();

  const handleSearchInputFiltering = (filter: string) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        name_like: filter,
      },
    });
  };

  return (
    <Grid
      item
      xs={0}
      md={3}
      p={2}
      sx={{
        backgroundColor: DefaultTheme.palette.warning.light,
        borderRadius: "0.3rem",
      }}
    >
      <Stack spacing={2}>
        {showSearch && <Searchbar action={handleSearchInputFiltering} />}
        <Calendar />
        <FilterDestinationPicker />
        <FilterPricePicker />
        {router.query.country !== "Exotic" && <FilterAcomodationTypePicker />}
      </Stack>
    </Grid>
  );
};

export default DesktopFilters;
