import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

import "./Counter.css";

function Counter({ onQuantityChanged }) {
  const [count, setCount] = useState(0);

  React.useEffect(() => {
    onQuantityChanged && onQuantityChanged(count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  const quantityAdd = () => {
    setCount(count + 1);
  };
  const quantitySubtract = () => {
    if (count - 1 < 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="counterContainer">
      <Grid container sx={{ color: "text.primary" }} className="size">
        <Grid item xs={1}>
          <DeleteIcon />
        </Grid>
        <Grid item xs={6}>
          <strong>Fista elastica</strong>
          <div className="features">Height 150cm,Green</div>
          <div>
            <button className="plus" onClick={quantityAdd}>
              +
            </button>
            <span>{count}</span>
            <button className="minus" onClick={quantitySubtract}>
              -
            </button>
          </div>
        </Grid>
        <Grid item xs={2}>
          <strong className="opa">Price/pcs</strong>
          <div className="opa bold">Total</div>
        </Grid>
        <Grid item xs={3}>
          <div className="opa">1133 Kr</div>
          <strong>1133 Kr</strong>
        </Grid>
      </Grid>
    </div>
  );
}

export default Counter;
