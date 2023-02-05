import { ADD_TO_CART, CLEAR_CART, REMOVE_CART } from "./actionTypes";

const initialState = {
  items: [],
  billingCustomer: undefined,
  deliveryCustomer: undefined,
  services: [],
  cartId: undefined,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        items: [...state.items, action.payload.items],
      };
    case REMOVE_CART:
      return {
        ...state,
        items: state.items.filter((x) => x.id !== action.payload.id),
      };
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
