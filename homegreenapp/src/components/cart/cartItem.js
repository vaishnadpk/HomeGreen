import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

const CartItem = () => {
  return (
    <div className="counterContainer" style={{ marginBottom: "10px" }}>
      <Grid container sx={{ color: "text.primary" }} className="size">
        <Grid item xs={1} style={{ paddingTop: "10px" }}>
          <strong>2 x</strong>
        </Grid>
        <Grid item xs={6}>
          <strong>Fista elastica</strong>
          <div className="features">Height 150cm,Green</div>
        </Grid>
        <Grid item xs={1}>
          <DeleteIcon />
        </Grid>
        <Grid item xs={3}>
          <div className="opa">1133 Kr</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartItem;
