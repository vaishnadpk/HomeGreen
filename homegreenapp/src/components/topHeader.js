import React from "react";
import "./topHeader.css";
import GrassIcon from "@mui/icons-material/Grass";
import MenuIcon from "@mui/icons-material/Menu";

import UseAutocomplete from "./UseAutocomplete";
function TopHeader() {
  return (
    <div className="topHeader">
      <h3>
        <GrassIcon />
        H/G
      </h3>
      <UseAutocomplete />
      <MenuIcon />
    </div>
  );
}

export default TopHeader;
