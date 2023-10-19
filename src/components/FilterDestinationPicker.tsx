import { DESTINATIONS_ENDPOINT } from "@/constants/constants";
import useFetchClientSide from "@/hooks/useFetchClientSide";
import DefaultTheme from "@/styles/DefaultTheme";
import { DropdownDestinationType } from "@/types/types";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

type Props = {};

const FilterDestinationPicker = (props: Props) => {
  const router = useRouter();
  const [isFormShown, setisFormShown] = useState(true);
  const [destinations, status] = useFetchClientSide(DESTINATIONS_ENDPOINT);

  const acomodationType = router.query.acomodationType;

  const handleChange = (filter: string) => {
    router.push({
      pathname: `/destinacii/${filter}/Apartment`,
    },undefined, {scroll: false});
  };

  if (status === "loading") {
    <Skeleton
      sx={{ bgcolor: "grey.900" }}
      variant="rectangular"
      width={210}
      height={118}
    />;
  }

  if (status === "success") {
    return (
      <div
        style={{
          borderBottom: `2px solid ${DefaultTheme.palette.info.main}`,
          margin: 0,
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Typography variant="h6" p={0} m={0} component={'h3'}>
            Дестинации
          </Typography>
          <Button
            sx={{
              color: "black",
              margin: 0,
            }}
            onClick={() => setisFormShown(!isFormShown)}
          >
            {isFormShown ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
          </Button>
        </Stack>
        {isFormShown && (
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={router.query.country}
              name="radio-buttons-group"
              onChange={(e) => handleChange(e.currentTarget.value)}
            >
              {destinations.map((destination: DropdownDestinationType) => (
                <FormControlLabel
                  key={destination.id}
                  value={destination.textEn}
                  control={<Radio color={"info"} />}
                  label={destination.text}
                />
              ))}
            </RadioGroup>
          </FormControl>
        )}
      </div>
    );
  }
};

export default FilterDestinationPicker;
