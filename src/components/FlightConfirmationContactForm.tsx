import { FLY_TICKET_REQUEST_ENDPOINT } from "@/constants/constants";
import { postRequest } from "@/helpers/postRequest";
import DefaultTheme from "@/styles/DefaultTheme";
import { FlightContactDataType, FlightSearchDataBodyType } from "@/types/types";
import {
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useRef } from "react";

type FlightConfirmationContactFormProps = {
  flightSearchFormData: FlightSearchDataBodyType | undefined;
};

const FlightConfirmationContactForm = ({
  flightSearchFormData,
}: FlightConfirmationContactFormProps) => {
  const nameInput = useRef<HTMLInputElement>(null);
  const surnameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const telephoneInput = useRef<HTMLInputElement>(null);

  const breakpoint = useMediaQuery("(min-width:769px)");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const postBodyData: FlightContactDataType = {
      name: nameInput.current!.value,
      surname: surnameInput.current!.value,
      email: emailInput.current!.value,
      phone: telephoneInput.current!.value,
      ...flightSearchFormData!,
    };

    postRequest(FLY_TICKET_REQUEST_ENDPOINT, postBodyData);
  };

  return (
    <Container
      component={"section"}
      sx={{
        padding: "1rem",
      }}
    >
      <form
        style={{
          backgroundColor: DefaultTheme.palette.warning.light,
          padding: "2rem",
          marginBottom: "2rem",
          borderRadius: "0.5rem",
        }}
        onSubmit={handleSubmit}
      >
        <Stack>
          <Typography variant="h2" component={"h2"}>
            Податоци за Контакт
          </Typography>
          <Grid container spacing={2} marginBottom={2}>
            <Grid item xs={12} md={6}>
              <TextField
                inputRef={nameInput}
                fullWidth
                type="text"
                id="outlined-basic"
                label="Име"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                inputRef={surnameInput}
                fullWidth
                type="text"
                id="outlined-basic"
                label="Презиме"
                variant="outlined"
                required
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                inputRef={emailInput}
                fullWidth
                type="email"
                id="outlined-basic"
                label="Е-Маил"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                inputRef={telephoneInput}
                fullWidth
                type="tel"
                id="outlined-basic"
                label="Телефон"
                variant="outlined"
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{
              width: breakpoint ? "25%" : "100%",
              marginTop: 2,
            }}
          >
            ПОБАРАЈ ПОНУДА
          </Button>
        </Stack>
      </form>
    </Container>
  );
};

export default FlightConfirmationContactForm;
