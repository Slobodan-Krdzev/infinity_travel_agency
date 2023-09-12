import DefaultTheme from "@/styles/DefaultTheme";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
type Props = {};

const FilterAcomodationTypePicker = (props: Props) => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const router = useRouter();
  const country = router.query.country;

  const handleFilter = (filter: string) => {
    router.push({
      pathname: `/destinacii/${country}/${filter}`,
    });
  };

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
        <Typography variant="h6" p={0} m={0}>
          Тип на сместување
        </Typography>
        <Button
          sx={{
            color: "black",
            margin: 0,
          }}
          onClick={() => setIsMenuShown(!isMenuShown)}
        >
          {isMenuShown ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
        </Button>
      </Stack>
      {isMenuShown && (
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={router.query.acomodationType}
            name="radio-buttons-group"
            onChange={(e) => handleFilter(e.currentTarget.value)}
          >
            <FormControlLabel
              key={"Apartment"}
              value={"Apartment"}
              control={<Radio color={"info"} />}
              label={"Апартмани"}
            />
            <FormControlLabel
              key={"Hotel"}
              value={"Hotel"}
              control={<Radio color={"info"} />}
              label={"Хотели"}
            />
            {country === "Macedonia" && (
              <FormControlLabel
                key={"Izlet"}
                value={"Izlet"}
                control={<Radio color={"info"} />}
                label={"Излети"}
              />
            )}
          </RadioGroup>
        </FormControl>
      )}
    </div>
  );
};

export default FilterAcomodationTypePicker;
