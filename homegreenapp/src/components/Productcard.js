import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Image from "../static/Fiscuselastica.jpeg";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function MultiActionAreaCard() {
  const value = 4;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={Image}
          alt="green iguana"
        />
        <CardContent>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Typography component="legend">Rating</Typography>
            <Rating name="read-only" value={value} readOnly />
          </Box>

          <Typography gutterBottom variant="h5" component="div">
            Window ficus on stem
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Height 150 cm, Green
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            1133 kr
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          disabled={false}
          variant="outlined"
          size="small"
          color="primary"
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
