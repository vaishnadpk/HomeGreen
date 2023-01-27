import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Counter from "./Counter";
import "./ShoppingCart.css";
import { Drawer } from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

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
      <IconButton
        color="neutral"
        aria-label="add to shopping cart"
        onClick={handleClickOpen}
      >
        <ShoppingCartIcon />
      </IconButton>

      <Drawer
        anchor={"right"}
        open={open}
        onClose={handleClose}
        variant="persistent"
      >
        <Typography gutterBottom>In Cart</Typography>
        <Typography gutterBottom>
          <Counter onQuantityChanged={handleQuatityChange} />
        </Typography>
        <Button autoFocus onClick={handleClose}>
          To the Checkout
        </Button>
      </Drawer>

      {/* <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="position"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Shopping cart
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>In Cart</Typography>
          <Typography gutterBottom>
            <Counter onQuantityChanged={handleQuatityChange} />
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            To the Checkout
          </Button>
        </DialogActions>
      </BootstrapDialog> */}
    </div>
  );
}
