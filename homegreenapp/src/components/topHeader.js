import React from "react";
import "./topHeader.css";
import GrassIcon from "@mui/icons-material/Grass";
import ShoppingCart from "./ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";

import UseAutocomplete from "./UseAutocomplete";
function TopHeader() {
  return (
    <div className="topContainer">
      <div className="topHeader">
        <h3>
          <span className="leftICon">
            <GrassIcon />
          </span>
          <span>H/G</span>
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
