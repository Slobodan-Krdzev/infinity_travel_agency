import { Arangement } from "@/types/types";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo from "../../public/images/logo.png";
import ArangementCard from "./ArangementCard";

type CarousellArangementsProps = {
  arangements: Arangement[];
  type: "izlet" | "destination";
};

const CarousellArangements = ({
  arangements,
  type,
}: CarousellArangementsProps) => {
  const breakpoint = useMediaQuery("(min-width:769px)");

  if (arangements.length > 0) {
    return (
      <>
        <section
          style={{
            width: "90%",
            margin: "2rem auto",
          }}
        >
          <Carousel
            swipeable={true}
            draggable={true}
            infinite={false}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousell-styles"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            pauseOnHover
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 4,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
          >
            {arangements.map((arangement) => (
              <ArangementCard
                key={arangement.id}
                linkTo={`/${type === "izlet" ? "izleti/" : `aranzmani/`}${
                  arangement.id
                }`}
                item={arangement}
                margin={true}
              />
            ))}
          </Carousel>
          {!breakpoint && (
            <Typography variant="body2" component={"i"} textAlign={"center"}>
              Лизгај кон лево или десно за да видиш повеќе аранжмани
            </Typography>
          )}
        </section>
      </>
    );
  } else {
    return (
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Image src={logo} alt={"Logo"} />
        <Typography variant="h1" component={"h2"} textAlign={"center"}>
          Во моментот немаме понуди од овој тип.
        </Typography>
      </Stack>
    );
  }
};

export default CarousellArangements;
