import DefaultTheme from "@/styles/DefaultTheme";
import { FlightSearchDataBodyType } from "@/types/types";
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useRef, useState } from "react";

type FlightSearchFormProps = {
  action: (postBodyData: FlightSearchDataBodyType) => void;
};

const FlightSearchForm = ({ action }: FlightSearchFormProps) => {
  const breakpoint = useMediaQuery("(min-width:769px)");
  const [ticketTypeValue, setSelectedValue] = useState("one-way");

  const fromDate = useRef<HTMLInputElement>(null);
  const toDate = useRef<HTMLInputElement>(null);
  const departureDate = useRef<HTMLInputElement>(null);
  const arivalDate = useRef<HTMLInputElement>(null);
  const adults = useRef<HTMLInputElement>(null);
  const kids = useRef<HTMLInputElement>(null);
  const babies = useRef<HTMLInputElement>(null);
  const flyClass = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let postDataBody: FlightSearchDataBodyType = {
      ticketType: ticketTypeValue,
      fromDate: new Date(fromDate.current!.value),
      toDate: new Date(toDate.current!.value),
      departureDate: new Date(departureDate.current!.value),
      arivalDate: new Date(arivalDate.current!.value),
      adults: adults.current!.value.toString(),
      kids: kids.current!.value.toString(),
      babies: babies.current!.value.toString(),
      flyClass: flyClass.current!.value.toString(),
    };

    action(postDataBody);
  };

  return (
    <Container component={"section"}>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: DefaultTheme.palette.warning.light,
          padding: "2rem",
          marginBottom: "2rem",
          borderRadius: "0.5rem",
          margin: '1rem 0'
        }}
      >
        <Stack>
          <Typography variant="h2" component={"h2"}>
            Пребарувај
          </Typography>
          <FormControl>
            <RadioGroup
              value={ticketTypeValue}
              onChange={(e) => setSelectedValue(e.target.value)}
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="povraten"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="returning"
                control={<Radio />}
                label="Повратен Билет"
              />
              <FormControlLabel
                value="one-way"
                control={<Radio />}
                label="Еден Правец"
              />
            </RadioGroup>
          </FormControl>

          {/* prv red */}

          <Grid container spacing={2} marginBottom={2} onSubmit={handleSubmit}>
            <Grid item xs={6} md={3}>
              <TextField
                inputRef={fromDate}
                fullWidth
                type="date"
                defaultValue={new Date()}
                label="Од"
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: { paddingRight: "0px" },
                }}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                inputRef={toDate}
                fullWidth
                type="date"
                defaultValue={new Date()}
                label="До"
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: { paddingRight: "0px" },
                }}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                inputRef={departureDate}
                fullWidth
                type="date"
                label="Датум на поаѓање"
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: { paddingRight: "0px" },
                }}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                inputRef={arivalDate}
                fullWidth
                type="date"
                label="Датум на заминување"
                variant="outlined"
                required
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{
                  style: { paddingRight: "0px" },
                }}
              />
            </Grid>
          </Grid>

          {/* VTOR red */}
          <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Возрасни</InputLabel>
                <Select
                  inputRef={adults}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="Возрасни"
                  //   onChange={handleChange}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Деца</InputLabel>
                <Select
                  inputRef={kids}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="Деца"
                  //   onChange={handleChange}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Бебиња</InputLabel>
                <Select
                  inputRef={babies}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="Класа"
                  //   onChange={handleChange}
                >
                  <MenuItem value={0}>0</MenuItem>
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                  <MenuItem value={5}>5</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6} md={3}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Класа</InputLabel>
                <Select
                  inputRef={flyClass}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  //   value={age}
                  label="Класа"
                  //   onChange={handleChange}
                >
                  <MenuItem value={"Economy"}>Економска</MenuItem>
                  <MenuItem value={"Business"}>Бизнис</MenuItem>
                  <MenuItem value={"First Class"}>Прва Класа</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Button
            type="submit"
            variant="contained"
            sx={{
              width: breakpoint ? "25%" : "100%",
            }}
          >
            ПОБАРАЈ ПОНУДА
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default FlightSearchForm;
