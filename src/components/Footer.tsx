import { DESTINATIONS_ENDPOINT } from "@/constants/constants";
import useFetchClientSide from "@/hooks/useFetchClientSide";
import DefaultTheme from "@/styles/DefaultTheme";
import { Container, Grid, Skeleton, Typography } from "@mui/material";
import FooterList from "./FooterList";

const infoListItems = [
  {
    id: 1,
    url: "/avio-karti",
    text: "Авио Карти",
  },
  {
    id: 2,
    url: "/grupni-patuvanja",
    text: "MICE Tуризам",
  },
  {
    id: 3,
    url: "/grupni-patuvanja",
    text: "Team Building",
  },
  {
    id: 4,
    url: "/grupni-patuvanja",
    text: "Tailor Made",
  },
  {
    id: 5,
    url: "/gift-card",
    text: "Gift Card",
  },
];
const restInfoItems = [
  {
    id: 1,
    url: "/za-nas",
    text: "За Нас",
  },
  {
    id: 2,
    url: "/opsti-uslovi",
    text: "Општи Услови За Патување",
  },
  {
    id: 3,
    url: "/patnicko-osiguruvanje",
    text: "Патничко Осигурување",
  },
];
const contactInfoItems = [
  {
    id: 1,
    text: "Адреса: Бул. Даме Груев бр.14 лок.24 1000 Скопје, Македонија",
    url: "/za-nas",
  },
  { id: 2, text: "E-маил: contact@infinitytravel.mk", url: "/za-nas" },
  { id: 3, text: "Телефон: 023100360/ 072254160", url: "/za-nas" }
];

const Footer = () => {
 
  const [destinations, status] = useFetchClientSide(DESTINATIONS_ENDPOINT);

  if (status === "loading") {
    <Skeleton variant="rounded" width={"100%"} height={100} />;
  }

  if(status === 'success') {
    return (
      <footer>
        <Grid
          container
          sx={{
            width: "90%",
            margin: "0 auto",
            padding: "2rem 0",
            alignItems: "flex-start",
          }}
        >
          <FooterList title={"Дестинации"} listItems={destinations} />
          <FooterList title={"Информации"} listItems={infoListItems} />
          <FooterList title={"Останато"} listItems={restInfoItems} />
          <FooterList title={"Контакт"} listItems={contactInfoItems} renderSocialIcons={true}/>
        </Grid>
        <Container
          maxWidth={"xl"}
          sx={{
            backgroundColor: DefaultTheme.palette.secondary.main,
            padding: "0.5rem 0",
          }}
        >
          <Typography
            color={"white"}
            variant="body1"
            component="p"
            marginBottom={0}
            textAlign={'center'}
          >
            © 2019 Инфинити травел. Сите права се задржани
          </Typography>
        </Container>
      </footer>
    );
  }
  
};

export default Footer;
