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
      const { id, name, quantity, description, price } = action.payload;
      const items = [...state.items];
      const item = items.find((x) => x.id === id);
      if (item) {
        item.quantity = item.quantity + 1;
      } else {
        items.push({ id, name, quantity, description, price });
      }
      return {
        ...state,
        items: items,
      };
    case REMOVE_CART:
      const itemss = state.items.filter((x) => x.id !== action.payload.id);
      console.log(itemss);
      return {
        ...state,
        items: itemss,
      };
    case CLEAR_CART:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
