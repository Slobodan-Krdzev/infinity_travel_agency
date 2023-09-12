import { CONTACT_ENPOINT } from "@/constants/constants";
import { postRequest } from "@/helpers/postRequest";
import { ContactDataBodyType } from "@/types/types";
import {
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import facebook from "../../public/images/facebook.png";
import insta from "../../public/images/insta.png";
import SectionTitle from "./SectionTitle";

const ContactForm = () => {
  const breakpoint = useMediaQuery("(min-width:769px)");

  const nameInput = useRef<HTMLInputElement>(null);
  const emailInput = useRef<HTMLInputElement>(null);
  const descInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let postDataBody: ContactDataBodyType = {
      name: nameInput.current?.value as string,
      email: emailInput.current?.value as string,
      desc: descInput.current?.value as string,
    };

    postRequest(CONTACT_ENPOINT, postDataBody);

    nameInput.current!.value = "";
    emailInput.current!.value = "";
    descInput.current!.value = "";
  };

  return (
    <>
      <SectionTitle text={"Контакт"} />
      <Grid
        container
        spacing={breakpoint ? 5 : 0}
        sx={{
          width: "90%",
          margin: "0 auto",
          marginBottom: "2rem",
        }}
      >
        <Grid
          item
          sm={12}
          md={breakpoint ? 6 : 12}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Stack component={"form"} onSubmit={handleSubmit}>
            <Grid container spacing={breakpoint ? 1 : 0} component={"div"}>
              <Grid
                item
                xs={12}
                md={6}
                component={"div"}
                marginBottom={"0.5rem"}
              >
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

              <Grid item xs={12} md={6} component={"div"}>
                <TextField
                  inputRef={emailInput}
                  fullWidth
                  type="email"
                  id="outlined-basic"
                  label="Е-маил"
                  variant="outlined"
                  required
                />
              </Grid>
            </Grid>

            <TextField
              inputRef={descInput}
              type="text"
              id="outlined-basic"
              label="Порака"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              required
              sx={{
                margin: breakpoint ? "0.5rem 0 0.5rem" : " 0.5rem 0",
              }}
            />
            <Button type="submit" variant="contained" fullWidth>
              {" "}
              ПРАТИ
            </Button>
          </Stack>
        </Grid>

        <Grid
          md={6}
          item
          display={breakpoint ? "flex" : "none"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography variant="h2" component={"h2"}>
            Контакт
          </Typography>
          <Typography variant="h6" component={"p"} marginBottom={"5px"}>
            Адреса: Бул. Даме Груев бр.14 лок.24 1000 Скопје, Македонија
          </Typography>
          <Typography variant="h6" component={"p"} marginBottom={"5px"}>
            E-маил: contact@infinitytravel.mk
          </Typography>
          <Typography variant="h6" component={"p"} marginBottom={"5px"}>
            Телефон: 023100360/ 072254160
          </Typography>
          <Stack direction={"row"} spacing={2}>
            <Link
              href={"https://www.instagram.com/infinitytravel.mk/"}
              target="_blank"
            >
              <Image src={insta} alt="instagram" />
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=100063706514419"}
              target="_blank"
            >
              <Image src={facebook} alt="instagram" />
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactForm;
