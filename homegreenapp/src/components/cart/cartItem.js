import React from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

import { removeFromCart } from "../../store/action";

//id, name, quantity, description
const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  function onRemoveFromCart() {
    dispatch(removeFromCart(item.id));
  }
  return (
    <div className="counterContainer" style={{ marginBottom: "10px" }}>
      <Grid container sx={{ color: "text.primary" }} className="size">
        <Grid item xs={1} style={{ paddingTop: "10px" }}>
          <strong>{item.quantity} x</strong>
        </Grid>
        <Grid item xs={6}>
          <strong>{item.name}</strong>
          <div className="features">{item.description}</div>
        </Grid>
        <Grid item xs={1}>
          <DeleteIcon onClick={onRemoveFromCart} />
        </Grid>
        <Grid item xs={3}>
          <div className="opa">{item.price} Kr</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartItem;
