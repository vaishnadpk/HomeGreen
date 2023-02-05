import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CartBadge({ onClick }) {
  const items = useSelector((state) => state.items);
  return (
    <IconButton aria-label="cart" onClick={onClick}>
      <StyledBadge badgeContent={items.length + 1} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
