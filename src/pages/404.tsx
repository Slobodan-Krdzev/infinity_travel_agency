import { Button, Link, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import logo from "../../public/images/logo.png";

const ErrorPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404</title>
        <meta
          name="description"
          content={`Infinity Travel Agency Macedonia Инфинити Травел Туристичка Агенција Македонија Лето Летување Излети Дестинации `}
        />
        <meta
          name="keywords"
          content={` Туризам Oдмор Лето Летување Излети Дестинации Плажа Море Tourism Summer Vacation`}
        />
      </Head>

      <Stack
        sx={{
          width: "50%",
          margin: "0 auto",
          height: "50vh",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={logo} alt={"Logo"} />
        <Typography variant="h1" component={"h2"}>
          Упс...Оваа адреса не постои. <br /> Врати се{" "}
          <Link
            href={"/"}
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{
                margin: 0,
                border: "2px solid black",
              }}
            >
              <span style={{ color: "black" }}>Дома</span>
            </Button>
          </Link>
          .
        </Typography>
      </Stack>
    </>
  );
};

export default ErrorPage;
