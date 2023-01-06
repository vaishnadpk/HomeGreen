import React from "react";
import "./ProductItem.css";

function ProductItem({ image, heading }) {
  return (
    <div className={"ProductItem"}>
      <div className="imageContainer">
        <img src={image} alt="indoor plant" />
        <div className="styleBorder"></div>
      </div>

      <div className="itemDescription">
        <h4>{heading} </h4>
        <p>
          A houseplant, sometimes known as a pot plant, potted plant, or an
          indoor plant, is an ornamental plant that is grown indoors. As such,
          they are found in places like residences and offices, mainly for
          decorative purposes.
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
