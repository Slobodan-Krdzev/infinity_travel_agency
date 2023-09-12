import React, { FormEvent, useState } from "react";
import TextsmsIcon from "@mui/icons-material/Textsms";
import DefaultTheme from "@/styles/DefaultTheme";
import { Box, Button, Modal, Stack, TextField, Typography, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const LiveChat = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const breakpoint = useMediaQuery("(min-width:769px)");

  const [date, setDate] = useState<string>('')

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()

    setDate(new Date().toLocaleTimeString())
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          bottom: breakpoint ? ".5%" : '1%',
          right: "2%",
          backgroundColor: DefaultTheme.palette.primary.main,
          color: "black",
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
          alignItems: "center",
          padding: "1rem",
          borderRadius: "0.5rem",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        <TextsmsIcon />{" "}
        <Typography variant="h4" component={"span"} m={0} fontWeight={700}>
          LIVE CHAT
        </Typography>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "white",
            border: `2px solid ${DefaultTheme.palette.primary.main}`,
            boxShadow: 24,
            p: 4,
            borderRadius: "0.5rem",
          }}
        >
          <Stack 
          sx={{
            position: 'relative',
            padding: '3re 0'
          }}>
            <Button variant="contained" color="secondary" sx={{
              position: 'absolute',
              top: 0,
              right: 0
            }}
            onClick={handleClose}>
              {" "}
              <CloseIcon />{" "}
            </Button>


            <form style={{
              marginTop: '5rem'
            }}
            onSubmit={handleSubmit}>

              {date === '' && <Typography variant="body2" component="p" sx={{fontWeight: 'bold', margin: '0.5rem 0.3rem'}}>
                Четувај со нас
              </Typography>}

              {date !== '' && <div style={{
                border: `1px solid ${DefaultTheme.palette.primary.main}`,
                marginBottom: '5rem',
                width: '80%',
                position: 'relative'
              }}>
                
              <Typography variant="body2" component="p" sx={{fontWeight: 'bold', margin: '0.5rem 0.3rem'}}>
                Ви благодариме што не исконтактиравме.
              </Typography>
              <Typography variant="body2" component={'p'} textAlign={'right'} sx={{
                position:'absolute',
                bottom: -30,
                right: 0
              }}>{date}</Typography>
              </div>}
              
              <Stack direction={'row'}> 
              <TextField
              color="primary"
              type="text"
              id="outlined-basic"
              label="Порака"
              variant="outlined"/>
                <Button type="submit" variant="contained" color="primary" sx={{
                  margin: 0
                }} >Испрати</Button>
              </Stack>
              
            </form>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default LiveChat;
