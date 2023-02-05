import { ADD_TO_CART } from "./actionTypes";

const addToCart = ({ id, name, quantity }) => {
  return {
    type: ADD_TO_CART,
    payload: { id, name, quantity },
  };
};
const removeFromCart = (id) => {
  return {
    type: ADD_TO_CART,
    payload: { id },
  };
};

export { addToCart };
