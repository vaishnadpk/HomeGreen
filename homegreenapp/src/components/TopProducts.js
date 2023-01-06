import React from "react";
import ProductItem from "./ProductItem";
import "./TopProducts.css";
import image1 from "../static/topimage 1.jpeg";
import image2 from "../static/topimage2.jpeg";
import image3 from "../static/topimage3.jpeg";

function TopProducts() {
  const itemDetails = [
    {
      imageUrl: image1,
      heading: "Indoor Plants",
      description: "Indoor plants gives a nature feel at home",
    },
    {
      imageUrl: image2,
      heading: "Home Decor",
      description: "Home Decor gives a nature feel at home",
    },
    {
      imageUrl: image3,
      heading: "Flower Vase",
      description: "Flower Vase gives a nature feel at home",
    },
  ];
  return (
    <div className="productContainer">
      {itemDetails.map((x, index) => (
        <ProductItem
          key={index}
          image={x.imageUrl}
          heading={x.heading}
          imagePosition={index === 1 ? "BOTTOM" : "TOP"}
        />
      ))}
    </div>
  );
}

export default TopProducts;
