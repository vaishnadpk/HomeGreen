import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_CART,
  ADD_CUSTOMER,
  ADD_SERVICE,
} from "./actionTypes";

const initialState = {
  items: [],
  billingCustomer: {},
  deliveryCustomer: {},
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
      return {
        ...state,
        items: itemss,
      };
    case CLEAR_CART:
      return initialState;
    case ADD_CUSTOMER:
      const { firstName, lastName, address, city, zipCode } = action.payload;
      return {
        ...state,
        billingCustomer: { firstName, lastName, address, city, zipCode },
        deliveryCustomer: { firstName, lastName, address, city, zipCode },
      };
    case ADD_SERVICE:
      return {
        ...state,
        services: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
