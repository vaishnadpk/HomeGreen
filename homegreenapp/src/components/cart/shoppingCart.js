import * as React from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { Drawer } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Counter from "../counter";
import CartBadge from "./cartBadge";

import "./ShoppingCart.css";

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleQuatityChange = (item) => {
    console.log(item);
  };

  return (
    <div>
      <CartBadge onClick={handleClickOpen} />

      <Drawer
        anchor={"right"}
        open={open}
        onClose={handleClose}
        variant="temporary"
      >
        <Typography gutterBottom>In Cart</Typography>
        <Typography gutterBottom>
          <Counter onQuantityChanged={handleQuatityChange} />
        </Typography>
        <Button autoFocus onClick={handleClose}>
          To the Checkout
        </Button>
      </Drawer>
    </div>
  );
}
