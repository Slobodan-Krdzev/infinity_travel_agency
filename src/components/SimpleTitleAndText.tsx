import { Typography } from "@mui/material";
import React from "react";

type SimpleTitleAndTextProps = {
  title: string;
  desc: string;
};

const SimpleTitleAndText = ({ desc, title }: SimpleTitleAndTextProps) => {
  return (
    <div style={{
        marginBottom: '2rem'
    }}>
      <Typography variant="h2" component={"h2"}>
        {title}
      </Typography>
      <Typography variant="body1" component={"p"}>
        {desc}
      </Typography>
    </div >
  );
};

export default SimpleTitleAndText;
