import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

import imageLogo from "../static/logo.png";
import ShoppingCart from "./cart/shoppingCart";
import UseAutocomplete from "./useAutocomplete";

import "./topHeader.css";

function TopHeader() {
  return (
    <div className="topContainer">
      <div className="topHeader">
        <h3>
          <img className="logo-image" src={imageLogo} alt="Logo" />
          <span className="name">H/G</span>
        </h3>
        <UseAutocomplete />
        <div className="rightClicks">
          <span className="rightIcon1">
            <ShoppingCart />
          </span>
          <span className="rightIcon2">
            <MenuIcon />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
