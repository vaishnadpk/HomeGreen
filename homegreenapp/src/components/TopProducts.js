import React from "react";

import image1 from "../static/topimage 1.jpeg";
import image2 from "../static/topimage2.jpeg";
import image3 from "../static/topimage3.jpeg";
import ProductItem from "./productItem";

import "./TopProducts.css";

function TopProducts() {
  const itemDetails = [
    {
      imageUrl: image1,
      heading: "Indoor Plants",
      description:
        "Indoor plant, is an ornamental plant that is grown indoors. As such, they are found in places like residences and offices, mainly for decorative purposes.",
    },
    {
      imageUrl: image2,
      heading: "Home Decor",
      description:
        "Green plants with colorful leaves, retro plants and flowering plants are at the top of the list of this year's favourites.",
    },
    {
      imageUrl: image3,
      heading: "Flower Vase",
      description:
        "A flower glass vase goes from treasure to trash, the moment it is broken. Fortunately, something else happens to you and me. Pick up your pieces.",
    },
  ];
  return (
    <div>
      <h1>Furniture & Decor</h1>
      <div className="productContainer">
        {itemDetails.map((x, index) => (
          <ProductItem
            key={index}
            image={x.imageUrl}
            heading={x.heading}
            description={x.description}
            imagePosition={index === 1 ? "BOTTOM" : "TOP"}
          />
        ))}
      </div>
    </div>
  );
}

export default TopProducts;
