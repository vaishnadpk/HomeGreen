import {
  ADD_TO_CART,
  REMOVE_CART,
  ADD_CUSTOMER,
  ADD_SERVICE,
  CLEAR_CART,
} from "./actionTypes";

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

const clearCart = (id) => {
  return {
    type: CLEAR_CART,
  };
};

const addCustomer = ({ firstName, lastName, address, city, zipCode }) => {
  return {
    type: ADD_CUSTOMER,
    payload: { firstName, lastName, address, city, zipCode },
  };
};

const addService = ({ deliveryService, assemblyService }) => {
  return {
    type: ADD_SERVICE,
    payload: [deliveryService, assemblyService].filter((x) => !x),
  };
};

export { addToCart, removeFromCart, clearCart, addCustomer, addService };
