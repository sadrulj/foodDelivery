/* eslint-disable import/no-anonymous-default-export */
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./types";

const addItemToCart = (state, item) => {
  const copy = [...state.carts];
  const curItemIndex = copy.findIndex((i) => i.item.id === item.id);
  const total = item.price;
  // const curItemPrice = copy.reduce(
  //   (total, curItemPrice) => total + curItemPrice,
  //   0
  // );
  // const total = item.price;
  // console.log(curItemPrice);
  if (curItemIndex < 0) {
    copy.push({ item, quantity: 1, total });
  } else {
    const copyItem = { ...copy[curItemIndex] };
    copyItem.quantity++;
    copyItem.total = item.price * copyItem.quantity;
    copy[curItemIndex] = copyItem;
  }

  // # always update your state, and update whatever you did
  return { ...state, carts: copy };
};

const removeItemFromCart = (state, itemID) => {
  const cart = [...state.carts];
  const curItemIndex = cart.findIndex((i) => i.item.id === itemID);

  const curItem = { ...cart[curItemIndex] };
  curItem.quantity--;

  if (curItem.quantity <= 0) {
    cart.splice(curItemIndex, 1);
  } else {
    cart[curItemIndex] = curItem;
  }

  return { ...state, carts: cart };
};

const clearCart = (state) => {
  return {
    ...state,
    carts: [],
  };
};

export default (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return addItemToCart(state, action.payload);
    case REMOVE_FROM_CART:
      return removeItemFromCart(state, action.payload);
    case CLEAR_ALL_FROM_CART:
      return clearCart(state);
    default:
      return state;
  }
};
