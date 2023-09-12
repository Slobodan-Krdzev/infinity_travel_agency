import useFetchClientSide from "@/hooks/useFetchClientSide";
import { Container, Grid, Skeleton, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { DESTINATIONS_ENDPOINT } from "@/constants/constants";

const Navbar = () => {
  const breakpoint = useMediaQuery("(min-width:769px)");
  const [destinations, status] = useFetchClientSide(DESTINATIONS_ENDPOINT);

  if (status === "loading") {
    <Skeleton variant="rounded" width={"100%"} height={100} />;
  }

  if (status === "success") {
    return (
      <Container maxWidth={"xl"} component={"header"} className="light-shadow">
        <Grid container component={"nav"}>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <Link href={"/"}>
              <Image src={logo} alt={"Logo"} />
            </Link>
          </Grid>

          <Grid
            item
            xs={9}
            sm={9}
            md={9}
            lg={9}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            {breakpoint ? (
              <DesktopNav destinations={destinations} />
            ) : (
              <MobileNav destinations={destinations} />
            )}
          </Grid>
        </Grid>
      </Container>
    );
  }
};

export default Navbar;
