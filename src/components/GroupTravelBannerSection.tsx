import React from "react";
import groupBanner1 from "../../public/images/groupBanner1.png";
import groupBanner2 from "../../public/images/groupBanner2.png";
import groupBanner3 from "../../public/images/groupBanner3.png";
import groupBanner4 from "../../public/images/groupBanner4.png";
import groupBanner5 from "../../public/images/groupBanner5.png";
import layer2 from "../../public/images/layer2.png";
import layer3 from "../../public/images/layer3.png";
import layer4 from "../../public/images/layer4.png";

import Image from "next/image";
import { Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";

const GroupTravelBannerSection = () => {
  const breakpoint = useMediaQuery("(min-width:769px)");

  return (
    <section
      style={{
        margin: breakpoint ? "10rem 0 6rem" : "5rem 0",
        backgroundImage: 'url("/images/groupBanner2.png")',
        padding: 0,
        position: "relative",
      }}
    >
      <Grid container justifyContent={"space-between"}>
        <Grid item xs={6}>
          <Image
            src={groupBanner1}
            alt="banner-image-1"
            style={{
              height: breakpoint ? "" : "60%",
            }}
          />
        </Grid>
        <Grid
          item
          xs={6}
          justifyContent={"flex-end"}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Image
            src={groupBanner3}
            alt="banner-image-3"
            style={{
              height: breakpoint ? "" : "60%",
            }}
          />
        </Grid>
        {!breakpoint && (
          <Grid item xs={12}>
            <Stack direction={"row"} alignItems={"flex-end"}>
              <Image
                src={groupBanner4}
                alt="banner-image-4"
                style={{
                  transform: "rotate(15deg)",
                  width: "40%",
                  height: "40%",
                }}
              />

              <Image
                src={groupBanner5}
                alt="banner-image-5"
                style={{
                  width: "40%",
                  height: "40%",
                }}
              />
            </Stack>
          </Grid>
        )}
      </Grid>

      {breakpoint && (
        <Image
          src={groupBanner4}
          alt="banner-image-4"
          style={{
            position: "absolute",
            top: "-15%",
            left: "24%",
            zIndex: 20,
          }}
        />
      )}

      {breakpoint && (
        <Image
          src={groupBanner5}
          alt="banner-image-5"
          style={{
            position: "absolute",
            bottom: 0,
            left: "30%",
            zIndex: 8888,
          }}
        />
      )}

      <Image
        src={layer2}
        alt="icon"
        style={{
          position: "absolute",
          top: breakpoint ? "-30%" : "-15%",
          left: breakpoint ? "48%" : "15%",
          zIndex: 8888,
          width: breakpoint ? "" : "30%",
          height: breakpoint ? "" : "30%",
        }}
      />
      <Image
        src={layer3}
        alt="icon"
        style={{
          position: "absolute",
          bottom: breakpoint ? "-20%" : "-10%",
          left: "15%",
          zIndex: 20,
          width: breakpoint ? "" : "30%",
          height: breakpoint ? "" : "30%",
        }}
      />
      <Image
        src={layer4}
        alt="icon"
        style={{
          position: "absolute",
          bottom: breakpoint ? "-20%" : "-10%",
          right: "1%",
          zIndex: 9001,
          width: breakpoint ? "" : "30%",
          height: breakpoint ? "" : "30%",
        }}
      />

      <Stack
        style={{
          backgroundImage: `url("/images/white.png")`,
          position: "absolute",
          top: "10%",
          right: breakpoint ? "8%" : "10%",
          zIndex: 9000,
          borderTopRightRadius: "2rem",
          borderTopLeftRadius: "2rem",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: breakpoint ? "80%" : "70%",
          width: breakpoint ? "" : "80%",
          padding: breakpoint ? "3rem" : "2rem",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          component={"h3"}
          sx={{
            fontWeight: 700,
          }}
        >
          {" "}
          Групни Патувања{" "}
        </Typography>
        <Typography variant="h6" component={"p"}>
          Lorem ipsum dolor sit, amet consectetur adipisicing
        </Typography>
        <Button variant="contained" color="primary">
          <Link className="link" href={"/grupni-patuvanja"}>
            ПОВЕЌЕ
          </Link>
        </Button>
      </Stack>
    </section>
  );
};

export default GroupTravelBannerSection;
