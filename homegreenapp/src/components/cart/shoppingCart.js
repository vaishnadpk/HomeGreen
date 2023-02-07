import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListAltIcon from "@mui/icons-material/ListAlt";
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

import Counter from "../counter";
import CartBadge from "./cartBadge";
import CartItem from "./cartItem";
import CustomerForm from "./customerForm";
import Services from "./services";

import "./ShoppingCart.css";

export default function CustomizedDialogs() {
  const items = useSelector((state) => state.items);

  const [open, setOpen] = React.useState(false);
  const [openItemPanel, setOpenItemPanel] = React.useState(true);
  const [openCustomerPanel, setCustomerItemPanel] = React.useState(false);
  const [openServicesPanel, setServicesItemPanel] = React.useState(false);

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

  const handleServicesPanelClick = () => {
    setServicesItemPanel(!openServicesPanel);
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
        <h5 style={{ paddingLeft: "20px" }}>My Cart</h5>
        <List style={{ width: "480px" }}>
          <ListItemButton onClick={handleItemPanelClick}>
            <ListItemIcon>
              <ListAltIcon />
            </ListItemIcon>
            <ListItemText primary="Items" />
            {openItemPanel ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItem>
            <Collapse in={openItemPanel} timeout="auto">
              {items.map((x) => (
                <CartItem key={x.id} item={x} />
              ))}
            </Collapse>
          </ListItem>
          <ListItemButton onClick={handleCustomerPanelClick}>
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Customer" />
            {openCustomerPanel ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItem>
            <Collapse in={openCustomerPanel} timeout="auto" unmountOnExit>
              <CustomerForm />
            </Collapse>
          </ListItem>

          <ListItemButton onClick={handleServicesPanelClick}>
            <ListItemIcon>
              <DesignServicesIcon />
            </ListItemIcon>
            <ListItemText primary="Services" />
            {openServicesPanel ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <ListItem>
            <Collapse in={openServicesPanel} timeout="auto" unmountOnExit>
              <Services></Services>
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
