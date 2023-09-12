import { DropdownDestinationType, FooterLinksListType } from "@/types/types";
import { Grid, Link, Typography, useMediaQuery } from "@mui/material";
import Image from "next/image";
import facebook from "../../public/images/facebook.png";
import insta from "../../public/images/insta.png";
import FooterListItem from "./FooterListItem";

type FooterListProps = {
  title: string;
  listItems: DropdownDestinationType[] | FooterLinksListType[];
  renderSocialIcons?: boolean;
};

const FooterList = ({
  title,
  listItems = [],
  renderSocialIcons,
}: FooterListProps) => {
  const breakpoint = useMediaQuery("(min-width:426px)");
  const breakpointTablet = useMediaQuery("(min-width:769px)");

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginBottom: breakpointTablet ? 0 : 5,
        textAlign: breakpoint ? "" : "center",
      }}
    >
      <Typography variant="h4" component={"h5"}>
        {title}
      </Typography>
      <ul>
        {listItems.map((item, idx) => (
          <FooterListItem key={idx} text={item.text} url={item.url} />
        ))}
        {renderSocialIcons && (
          <li>
            {" "}
            <Link
              href={"https://www.facebook.com/profile.php?id=100063706514419"}
              target="_blank"
            >
              <Image src={facebook} alt="facebook" />
            </Link>{" "}
            <Link
              href={"https://www.facebook.com/profile.php?id=100063706514419"}
              target="_blank"
            >
              <Image src={insta} alt="instagram" />
            </Link>{" "}
          </li>
        )}
      </ul>
    </Grid>
  );
};

export default FooterList;
