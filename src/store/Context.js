import { createContext } from "react";

export default createContext({
  items: [],
  carts: [],
  addItemToCart: (item) => {},
  removeItemFromCart: (itemID) => {},
  clearCart: () => {},
});
