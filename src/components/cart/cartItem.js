import React from "react";
import { useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { removeFromCart } from "../../store/action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  function onRemoveFromCart() {
    dispatch(removeFromCart(item.id));
  }
  return (
    <div
      className="counterContainer"
      style={{ marginBottom: "10px", width: "470px" }}
    >
      <Grid container sx={{ color: "text.primary" }} className="size">
        <Grid item xs={1} style={{ paddingTop: "10px" }}>
          <strong>{item.quantity} x</strong>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="button" gutterBottom>
            <strong>{item.name}</strong>
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {item.description}
          </Typography>
          {/* <strong>{item.name}</strong> */}
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
