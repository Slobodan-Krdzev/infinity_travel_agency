import { Stack, Typography, useMediaQuery } from "@mui/material";

type AboutUsSectionProps = {
  title: string;
  desc: string;
};

const AboutUsSection = ({ title, desc }: AboutUsSectionProps) => {
  const breakpoint = useMediaQuery("(min-width:769px)");

  return (
    <section
      style={{
        backgroundImage: `url('/images/aboutUsPageMidBanner.png')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        height: "80vh",
        marginTop: "2rem",
      }}
    >
      <Stack
        style={{
          backgroundImage: `url("/images/white.png")`,
          position: "absolute",
          top: "10%",
          right: breakpoint ? "8%" : "10%",
          borderTopRightRadius: "2rem",
          borderTopLeftRadius: "2rem",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: breakpoint ? "80%" : "70%",
          width: breakpoint ? "40%" : "80%",
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
          {title}
        </Typography>
        <Typography variant="h6" component={"p"}>
          {desc}
        </Typography>
      </Stack>
    </section>
  );
};

export default AboutUsSection;
