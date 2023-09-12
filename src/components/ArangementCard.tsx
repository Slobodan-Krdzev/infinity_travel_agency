import { handleRating } from "@/helpers/handleRating";
import { Arangement } from "@/types/types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

type ArangementCardProps = {
  linkTo: string;
  item: Arangement;
  margin?: boolean;
};

const ArangementCard = ({ linkTo, item, margin }: ArangementCardProps) => {
  return (
    <Grid item lg={4} md={6} sm={6} xs={6}>
      <Card
        sx={{ maxWidth: 345, margin: `${margin ? "0 1rem" : "0"}` }}
        className="shadow"
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={`/images/${item.thumbnailPhoto}`}
            alt={item.name}
          />
          <CardContent>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography gutterBottom variant="h5" component="h4">
                {item.name}
              </Typography>
              <span>{handleRating(item.stars)}</span>
            </Stack>

            <Typography
              variant="body2"
              color="text.secondary"
              display={"flex"}
              alignItems={"center"}
              textTransform={"capitalize"}
            >
              <LocationOnIcon />
              {item.region}
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Stack>
                <Typography sx={{ marginBottom: 0 }}>
                  {item.priceForNights > 1
                    ? `${item.priceForNights} ноќевања/наем соба`
                    : `${item.priceForNights} ноќевање/наем соба`}
                </Typography>
                {item.info.walkingDistance && (
                  <Typography sx={{ marginBottom: 0 }}>
                    Должина на пешачење: {item.info.walkingDistance}
                  </Typography>
                )}
                {item.info.distanceFromBeach && (
                  <Typography sx={{ marginBottom: 0 }}>
                    {item.info.distanceFromBeach} м од плажа
                  </Typography>
                )}
                {item.info.distanceFromCenter && (
                  <Typography sx={{ marginBottom: 0 }}>
                    {item.info.distanceFromCenter} м од градски центар
                  </Typography>
                )}
              </Stack>
              <Typography>
                од
                <br />
                <b>{item.startingPrice} €</b>
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            padding: 0,
            margin: 0,
          }}
        >
          <Link
            href={linkTo}
            style={{
              textDecoration: "none",
              color: "black",
              width: "100%",
            }}
          >
            <Button
              variant="outlined"
              color="primary"
              sx={{
                margin: 0,
                minWidth: "100%",
                border: "2px solid",
              }}
            >
              <span style={{ color: "black" }}>ПОВЕЌЕ</span>
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ArangementCard;
