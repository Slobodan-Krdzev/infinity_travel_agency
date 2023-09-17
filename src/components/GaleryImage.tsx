import DefaultTheme from "@/styles/DefaultTheme";
import { GaleryImageType } from "@/types/types";
import {
  Box,
  Button,
  Grid,
  Modal,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import React from "react";

const GaleryImage: React.FC<GaleryImageType> = ({ image, location }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const breakpoint = useMediaQuery("(min-width:403px)");

  return (
    <>
      <Grid item sm={12} md={3} lg={2}>
        <Image
          className="galery-image"
          src={`/images/${image}`}
          alt={location}
          width={breakpoint ? 174 : 310}
          height={breakpoint ? 183 : 220}
          onClick={handleOpen}
          style={{
            cursor: "pointer",
            transition: "transform 0.3s ease-in-out",
          }}
        />
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          border: "none",
        }}
      >
        <Box
          sx={{
            backgroundColor: DefaultTheme.palette.warning.light,
            border: "none",
            borderRadius: "0.5rem",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            boxShadow: 24,
            p: 6,
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "-7%",
                left: "18%",
                width: "67%",
                backgroundImage: "url('/images/yellowElement.png')",
                padding: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h6" marginBottom={0} sx={{ color: "white" }}>
                {location}
              </Typography>
            </div>
            <Image
              style={{
                borderRadius: "0.5rem",
                border: `1px solid ${DefaultTheme.palette.warning.dark}`,
              }}
              src={`/images/${image}`}
              alt="Modal Image"
              width={300}
              height={300}
            />
          </div>

          <Button
            variant="contained"
            color="info"
            sx={{
              margin: "1rem 0 0",
              color: "white",
            }}
            onClick={handleClose}
          >
            Затвори Прозорец
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default GaleryImage;
