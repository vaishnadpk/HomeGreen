import React from "react";
import "./ProductItem.css";

function ProductItem({ image, heading, description }) {
  return (
    <div className={"ProductItem"}>
      <div className="imageContainer">
        <img src={image} alt="indoor plant" />
        <div className="styleBorder"></div>
      </div>

      <div className="itemDescription">
        <h4>{heading} </h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProductItem;
