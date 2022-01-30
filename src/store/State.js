import React, { useReducer } from "react";

import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_ALL_FROM_CART } from "./types";
import Context from "./Context";
import Reducer from "./Reducer";
import { Items } from "../data";

export default function State(props) {
  const items = [...Items];
  const [state, dispatch] = useReducer(Reducer, { carts: [] });

  // # add product to cart
  const addItemToCart = (item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };

  // # remove product from cart
  const removeItemFromCart = (itemID) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: itemID,
    });
  };

  // # clear all product from cart
  const clearCart = () => {
    dispatch({
      type: CLEAR_ALL_FROM_CART,
    });
  };

  return (
    <Context.Provider
      value={{
        items: items,
        addItemToCart: addItemToCart,
        removeItemFromCart: removeItemFromCart,
        clearCart: clearCart,
        carts: state.carts,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
