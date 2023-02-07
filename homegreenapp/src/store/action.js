import { ADD_TO_CART, REMOVE_CART } from "./actionTypes";

const addToCart = ({ id, name, description, quantity, price }) => {
  return {
    type: ADD_TO_CART,
    payload: { id, name, quantity, description, price },
  };
};
const removeFromCart = (id) => {
  return {
    type: REMOVE_CART,
    payload: { id: id },
  };
};

export { addToCart, removeFromCart };
