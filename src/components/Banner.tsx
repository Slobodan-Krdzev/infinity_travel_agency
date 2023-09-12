import { Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import Searchbar from "./Searchbar";

type BannerProps = {
  image: string;
};

const Banner = ({ image }: BannerProps) => {
  const breakpoint = useMediaQuery("(min-width:769px)");
  const breakpointMobile = useMediaQuery("(min-width:426px)");

  const router = useRouter();

  const handleSearch = (query: string) => {
    router.push({
      pathname: `/destinacii/${query}/Apartment`,
    });
  };

  return (
    <section
      style={{
        position: "relative",
        backgroundImage: `url('/images/${image}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "90vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: breakpoint ? "15%" : "0",
          left: breakpoint ? "5%" : "15%",
          width: breakpoint ? "50%" : "70%",
          height: breakpointMobile ? "80%" : "60%",
          backgroundImage: `url('/images/yellow.png')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: breakpoint ? "5rem" : "2rem 2rem",
          borderTopRightRadius: "2rem",
          borderTopLeftRadius: "2rem",
        }}
      >
        <Typography variant="h1" component={"h1"} sx={{ fontWeight: "700" }}>
          Lorem ipsum dolor sit amet conse ctetur adipisicing
        </Typography>
        <Typography variant="h3" component="p">
          Lorem ipsum dolor sit amet conse ctetur adipisicing
        </Typography>
        {breakpoint && (
          <Searchbar action={handleSearch} placeholder="Grece..." />
        )}
      </div>
    </section>
  );
};

export default Banner;
