import React from "react";
import Productcard from "./productCard";
import Image1 from "../static/Fiscuselastica.jpeg";
import Image2 from "../static/Tulips 10 pack.jpeg";
import Image3 from "../static/PhilodendronRojoCongo.jpeg";
import Image4 from "../static/Goldenpalm.jpeg";
import Button from "@mui/material/Button";
import "./ProductCounter.css";

function ProductCounter() {
  const productDetails = [
    {
      imageUrl: Image1,
      ratingValue: 4,
      productName: "Window ficus on stem",
      height: 150,
      color: "Green",
      price: 1130,
    },
    {
      imageUrl: Image2,
      ratingValue: 5,
      productName: "Tulips - 10 pack",
      height: 40,
      color: "Several Colors",
      price: 79,
    },
    {
      imageUrl: Image3,
      ratingValue: 3,
      productName: `Philodendron 'Rojo Congo'`,
      height: 55,
      color: "Green",
      price: 188,
    },
    {
      imageUrl: Image4,
      ratingValue: 4,
      productName: "Golden Palm",
      height: 120,
      color: "Green",
      price: 279,
    },
  ];
  return (
    <div>
      <div className="productCardContainer">
        {productDetails.map((x, index) => (
          <Productcard
            key={index}
            image={x.imageUrl}
            value={x.ratingValue}
            productName={x.productName}
            height={x.height}
            color={x.color}
            price={x.price}
          />
        ))}
      </div>
      <Button variant="outlined" size="large">
        Show more
      </Button>
    </div>
  );
}

export default ProductCounter;
