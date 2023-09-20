import DefaultTheme from "@/styles/DefaultTheme";
import { DropdownDestinationType } from "@/types/types";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Button, Grid, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import NavlinkElement from "./NavlinkElement";
import Searchbar from "./Searchbar";
import { useRouter } from "next/router";

type MobileNavProps = {
  destinations: DropdownDestinationType[];
};

const MobileNav = ({ destinations }: MobileNavProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const router = useRouter();

  const handleSearch = (query: string) => {
    router.push({
      pathname: `/destinacii/${query}/Apartment`,
    });
  };

  useEffect(() => {
    handleClose()
  }, [router.query])

  return (
      <Grid sx={{
        marginLeft: '2rem'
      }} container>
        <Grid
          item
          xs={9}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          {isSearchVisible ? 
            <div> <Searchbar action={handleSearch } /> </div>
           : (
            <IconButton
              sx={{ backgroundColor: DefaultTheme.palette.info.main, color: 'white' }}
              onClick={() => setIsSearchVisible(!isSearchVisible)}
              aria-label="Search Button"
            >
              <SearchIcon fontSize="large" />
            </IconButton>
          )}
        </Grid>
        <Grid
          item
          xs={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <div>
            <Button
              id="mobile-button"
              aria-controls={open ? "mobile-menu" : undefined}
              aria-haspopup="true"
              aria-label="Menu Button"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              sx={{
                marginBottom: 0,
              }}
            >
              <MenuIcon color="info" fontSize="large" />
            </Button>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "mobile-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <NavlinkElement to={"/"} text={"Дома"} />
              </MenuItem>
              <DropdownMenu destinations={destinations} />
              <MenuItem onClick={handleClose}>
                <NavlinkElement
                  to={"/grupni-patuvanja"}
                  text={"Групни патувања"}
                />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavlinkElement to={"/avio-karti"} text={"Авио карти"} />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavlinkElement
                  to={"/istrazi-ja-makedonija"}
                  text={"Истражи ја Македонија"}
                />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavlinkElement to={"/za-nas"} text={"За Нас"} />
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <NavlinkElement to={"/"} text={"02/3100-360"} />
              </MenuItem>
            </Menu>
          </div>
        </Grid>
      </Grid>
  );
};

export default MobileNav;
