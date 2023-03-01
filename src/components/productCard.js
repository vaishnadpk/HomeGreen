import * as React from "react";
import { useDispatch } from "react-redux";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import { addToCart } from "../store/action";

import "./productCard.css";

export default function MultiActionAreaCard({
  image,
  value,
  productName,
  height,
  color,
  price,
  productId,
}) {
  const dispatch = useDispatch();
  function onAddToCart() {
    dispatch(
      addToCart({
        id: productId,
        name: productName,
        quantity: 1,
        description: `Height ${height}cm, ${color}`,
        price: price,
      })
    );
  }

  return (
    <Card sx={{ maxWidth: 325 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={image}
          alt="Window ficus on stem"
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
            {productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Height {height}cm, {color}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {price} kr
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          disabled={false}
          variant="outlined"
          size="small"
          color="primary"
          onClick={onAddToCart}
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
