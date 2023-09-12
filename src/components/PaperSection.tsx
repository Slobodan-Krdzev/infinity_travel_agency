import React from "react";
import bagIcon from "../../public/images/bagIcon.png";
import connectIcon from "../../public/images/connectIcon.png";
import locationIcon from "../../public/images/locationIcon.png";
import purpleElement from "../../public/images/purpleElement.png";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";

const PaperSection = () => {

  const breakpoint = useMediaQuery("(min-width:600px)");


  return (
    <section style={{
        position: "relative",
        margin: '3rem 0',
        padding: breakpoint ? '4rem' : '1rem'
    }}>
      <Grid
        container
        sx={{
          padding: "3rem 2rem",
          width: "90%",
          margin: "0 auto",
          backgroundImage: `url("/images/paperCut.png")`,
          backgroundSize: 'cover'
        }}
      >
        <Grid
          item
          xs={4}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Image src={bagIcon} alt="Bag" style={{
            width: breakpoint ? '' : '40%',
            height: breakpoint ? '' : '20%',

          }}/>
          <Typography variant="body2" component={"p"}>
            1000+патувања <br />
            Започнете ја вашата <br /> авантура
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Image src={connectIcon} alt="Bag" style={{
            width: breakpoint ? '' : '40%',
            height: breakpoint ? '' : '40%',

          }}/>
          <Typography variant="body2" component={"p"}>
            15000+патници годишно <br /> Бидете дел од нашите <br /> задоволни
            патници
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
        >
          <Image src={locationIcon} alt="Bag" style={{
            width: breakpoint ? '' : '40%',
            height: breakpoint ? '' : '30%',

          }}/>
          <Typography variant="body2" component={"p"}>
            ОДберете ја вашата <br /> дестинација
          </Typography>
        </Grid>

       
      </Grid>
      <Image
          src={purpleElement}
          alt="violet paper element"
          style={{
            position: "absolute",
            width: breakpoint ? "" : "30%" ,
            height: breakpoint ? "" : "30%" ,
            top: breakpoint ? "6%" : "7%",
            left: breakpoint ? "6%" : "1%",
            zIndex: 99999
          }}
        />
        <Image
          src={purpleElement}
          alt="violet paper element"
          style={{
            width: breakpoint ? "" : "30%" ,
            height: breakpoint ? "" : "30%" ,
            position: "absolute",
            bottom: breakpoint ? "5%" : "7%",
            right: breakpoint ? "6%" : "1%",
            zIndex: 99999,
            
          }}
        />
    </section>
  );
};

export default PaperSection;
