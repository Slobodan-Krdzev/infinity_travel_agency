import { NEWSLETTER_ENDPOINT } from "@/constants/constants";
import { postRequest } from "@/helpers/postRequest";
import { NewsleterDataBodyType } from "@/types/types";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Button, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import { useRef, useState } from "react";

const Newsletter = () => {
  const [isFormShown, setisFormShown] = useState(false);
  const breakpoint = useMediaQuery("(min-width:769px)");

  const nameInput = useRef<HTMLInputElement>(null)
  const emailInput = useRef<HTMLInputElement>(null)


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    let postDataBody: NewsleterDataBodyType =  {
      name: nameInput.current?.value as string,
      email: emailInput.current?.value as string
    }   

    postRequest( NEWSLETTER_ENDPOINT, postDataBody)

    nameInput.current!.value = ''
    emailInput.current!.value = ''
  }

  return (
    <section
      style={{
        backgroundColor: "#21B0B7",
        padding: "1rem",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        spacing={5}
      >
        <MailOutlineIcon fontSize="large" />
        <Typography
          variant={"h3"}
          component={"h3"}
          textAlign={"center"}
          m={"0"}
        >
          Пријави се и добиј актуелни <br /> понуди на твојот е-маил
        </Typography>
        <Button sx={{
            color: 'black',
            marginLeft: 0,
            marginRight: 0

        }}
        onClick={() => setisFormShown(!isFormShown)}>
        {isFormShown ? <ExpandLessIcon fontSize="large"/> :  <KeyboardArrowDownIcon
          fontSize="large"
        /> }
       
        </Button>
        
      </Stack>

      {isFormShown && (
        <div>
          <form
            style={{
              marginTop: "2rem",
            }}
            onSubmit={handleSubmit}
          >
            <Stack
              direction={breakpoint ? 'row' : 'column'}
              justifyContent={"center"}
              alignItems={"baseline"}
              spacing={2}
            >
              <TextField
                inputRef={nameInput}
                fullWidth={breakpoint ? false : true}
                type="text"
                required
                label="Име"
                color="warning"
                variant="outlined"
                InputLabelProps={{
                    style: { color: 'black', fontSize: '1rem' },
                  }}
                sx={{
                  borderColor: "black",
                  input: {
                    borderRadius: '.3rem',
                    color: "black",
                    background: "white",
                  }
                }}
              />
              <TextField
                inputRef={emailInput}
                fullWidth={breakpoint ? false : true}
                type="email"
                required
                color="warning"
                label="Е-Маил"
                InputLabelProps={{
                    style: { color: 'black', fontSize: '1rem' },
                  }}
                sx={{
                    borderColor: "black",
                    input: {
                      borderRadius: '.3rem',
                      color: "black",
                      background: "white",
                    },
                  }}
              />
              <Button
                fullWidth={breakpoint ? false : true}
                type="submit"
                variant="contained"
                color="primary"
                sx={{
                  fontSize: "1.2rem",
                  padding: "0.2rem 5rem"
                }}
              >
                Пријави Ме
              </Button>
            </Stack>
          </form>
          <Typography textAlign={'center'} variant="h6" component={'p'} marginTop={breakpoint ? 0 : 2}>Со кликање на Пријави Ме се зачленуваш за добивање на маилови за нашите актуелни понуди и промоции.</Typography>
        </div>
      )}
    </section>
  );
};

export default Newsletter;
