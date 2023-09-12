import DefaultTheme from "@/styles/DefaultTheme";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Slider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

function valuetext(value: number) {
  return `${value}`;
}

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 1000,
    label: "1000",
  },
];

const FilterPricePicker = () => {
  const router = useRouter();

  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [value, setValue] = useState<number[]>([0, 1000]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  const handleSubmit = () => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        priceLow: value[0],
        priceHigh: value[value.length - 1],
      },
    });
  };

  const handleResetPrice = () => {
    delete router.query.priceLow;
    delete router.query.priceHigh;
    router.push(router);

    setIsSliderVisible(false);
    setValue([0, 1000]);
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
          Цена
          <Typography variant="h5" component={"span"}>
            {" "}
            {value[0]} - {value[value.length - 1]} €
          </Typography>
        </Typography>
        <Button
          sx={{
            color: "black",
            margin: 0,
          }}
          onClick={() => setIsSliderVisible(!isSliderVisible)}
        >
          {isSliderVisible ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
        </Button>
      </Stack>

      {isSliderVisible && (
        <Stack>
          <Slider
            getAriaLabel={() => " Range"}
            value={value}
            max={1000}
            marks={marks}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
          />
          <Button
            variant="contained"
            color="info"
            sx={{
              color: "white",
            }}
            onClick={handleSubmit}
          >
            Филтрирај по цена
          </Button>

          <Button
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "tomato",
            }}
            onClick={handleResetPrice}
          >
            Ресетирај
          </Button>
        </Stack>
      )}
    </div>
  );
};

export default FilterPricePicker;
