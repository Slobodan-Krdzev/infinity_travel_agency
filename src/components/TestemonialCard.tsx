import { TestemonialType } from "@/types/types";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import line from "../../public/images/line.png";
import yellowElement from "../../public/images/yellowElement.png";
import { handleRating } from "@/helpers/handleRating";

const TestemonialCard: React.FC<TestemonialType> = ({
  title,
  image,
  rating,
  desc,
  brand,
}) => {
  return (
    <Grid
      className="testemonial-card"
      item
      lg={4}
      sm={6}
      sx={{
        position: "relative",
        marginTop: "2rem",
        paddingRight: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <Card component={"div"}>
        <Image
          src={yellowElement}
          alt={"yellow-paper"}
          style={{
            position: "absolute",
            zIndex: 9999,
            top: 0,
            left: "20%"
          }}
        />
        <CardActionArea
          sx={{
            cursor: "default",
          }}
        >
          <CardMedia
            className="testemonial-image-clip-path testemonial-card"
            component="img"
            height="200"
            image={image}
            alt="green iguana"
            sx={{transition: "transform 0.3s ease-in-out"}}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h5"
              fontWeight="bold"
            >
              {title}
            </Typography>
            <div className="stars" style={{ marginBottom: "2rem" }}>
              {handleRating(rating)}
            </div>
            <Typography variant="body1" color="text.secondary" component="p">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            position: "relative",
          }}
        >
          <Typography variant="h5" component={"h6"} fontWeight="bold">
            {brand}
          </Typography>
          <Image
            src={line}
            alt="line"
            style={{
              position: "absolute",
              top: "60%",
            }}
          />
        </CardActions>
      </Card>
    </Grid>
  );
};

export default TestemonialCard;
