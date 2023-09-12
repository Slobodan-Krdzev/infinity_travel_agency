import { DropdownDestinationType } from "@/types/types";
import { Stack, Typography } from "@mui/material";
import DropdownMenu from "./DropdownMenu";
import NavlinkElement from "./NavlinkElement";

type DesktopNavProps = {
  destinations: DropdownDestinationType[];
};

const DesktopNav = ({ destinations }: DesktopNavProps) => {
  return (
    <Stack component={"ul"} direction={"row"} spacing={2} alignItems={"center"}>
      <Typography variant="h5" component={"li"}>
        <NavlinkElement to={"/"} text={"Дома"} />
      </Typography>
      <DropdownMenu destinations={destinations} />
      <Typography variant="h5" component={"li"}>
        <NavlinkElement to={"/grupni-patuvanja"} text={"Групни Патувања"} />
      </Typography>
      <Typography variant="h5" component={"li"}>
        <NavlinkElement to={"/avio-karti"} text={"Авио карти"} />
      </Typography>
      <Typography variant="h5" component={"li"}>
        <NavlinkElement
          to={"/istrazi-ja-makedonija"}
          text={"Истражи ја Македонија"}
        />
      </Typography>
      <Typography variant="h5" component={"li"}>
        <NavlinkElement to={"/za-nas"} text={"За Нас"} />
      </Typography>
      <Typography variant="h5" component={"li"}>
        <NavlinkElement to={"/"} text={"02/3100-360"} noLink={true} />
      </Typography>
    </Stack>
  );
};

export default DesktopNav;
