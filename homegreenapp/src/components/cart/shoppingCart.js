import * as React from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListIcon from "@mui/icons-material/List";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
} from "@mui/material";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Typography from "@mui/material/Typography";

import Counter from "../counter";
import CartBadge from "./cartBadge";

import "./ShoppingCart.css";

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);
  const [openItemPanel, setOpenItemPanel] = React.useState(true);
  const [openCustomerPanel, setCustomerItemPanel] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleQuatityChange = (item) => {
    console.log(item);
  };

  const handleItemPanelClick = () => {
    setOpenItemPanel(!openItemPanel);
  };

  const handleCustomerPanelClick = () => {
    setCustomerItemPanel(!openCustomerPanel);
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
        <Typography gutterBottom></Typography>
        <List>
          <ListItemButton onClick={handleItemPanelClick}>
            <ListItemIcon>
              <ListIcon />
            </ListItemIcon>
            <ListItemText primary="Items" />
            {openItemPanel ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItem>
            <Collapse in={openItemPanel} timeout="auto">
              <Counter onQuantityChanged={handleQuatityChange} />
            </Collapse>
          </ListItem>
          <ListItemButton onClick={handleCustomerPanelClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" />
            {openCustomerPanel ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItem>
            <Collapse in={openCustomerPanel} timeout="auto" unmountOnExit>
              <spa>Customer</spa>
            </Collapse>
          </ListItem>

          <ListItemButton onClick={handleCustomerPanelClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {openCustomerPanel ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItem>
            <Collapse in={openCustomerPanel} timeout="auto" unmountOnExit>
              <spa>Services</spa>
            </Collapse>
          </ListItem>
        </List>

        <Button autoFocus onClick={handleClose}>
          To the Checkout
        </Button>
      </Drawer>
    </div>
  );
}
