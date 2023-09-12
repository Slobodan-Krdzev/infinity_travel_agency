import { Typography } from "@mui/material";
import React from "react";

type SectionTitle = {
  text: string;
};

const SectionTitle = ({ text }: SectionTitle) => {
  return (
    <Typography variant="h1" component={"h2"} style={{textAlign: 'center', overflow: 'hidden', margin: '2rem 0 0'}}>
        <Typography variant="h1" component={"span"} className="fancy-span" m={0}>{text}</Typography>
    </Typography>
  );
};

export default SectionTitle;
