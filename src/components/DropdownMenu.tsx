import { DropdownDestinationType } from "@/types/types";
import { Button, Menu, MenuItem, useMediaQuery } from "@mui/material";
import React from "react";
import NavlinkElement from "./NavlinkElement";

type Props = {
  destinations: DropdownDestinationType[];
};

const DropdownMenu = ({ destinations }: Props) => {
  const breakpoint = useMediaQuery("(min-width:769px)");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        sx={{
          color: "black",
          fontWeight: 400,
          fontSize: breakpoint ? "18px" : "14px",
          lineHeight: "22px",
          textTransform: "capitalize",
          marginBottom: 0,
          marginLeft: breakpoint ? "" : "4%",
          "@media (max-width:1255px)": {
            fontSize: "14px",
          },
        }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Дестинации
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {destinations.map((destination) => {
          return (
            <MenuItem key={destination.id} onClick={handleClose}>
              <NavlinkElement to={destination.url} text={destination.text} />
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};

export default DropdownMenu;
