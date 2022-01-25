import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Items } from "../../../../data";
import { actionType } from "../../../../reducer";
import { useStateValue } from "../../../../StateProvider";
let cartItems = [];

const Cart = ({ itemId, imgSrc, name, price }) => {
  const [qty, setQty] = useState(1);
  const [{ cart }, dispatch] = useStateValue();
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));

  useEffect(() => {
    cartItems = cart;
    setItemPrice(parseInt(qty) * parseFloat(price));
  }, [cart, price, qty]);

  const updateQuantity = (action, id) => {
    if (action === "add") {
      setQty(qty + 1);
    } else {
      if (qty === 0) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      }
      setQty(qty - 1);
    }
  };

  return (
    <div>
      <div className="cart" id={itemId}>
        <div className="imgBox">
          <img src={imgSrc} alt={name} />
        </div>
        <div className="itemSection">
          <h2 className="itemName">{name}</h2>
          <div className="itemQuantity">
            <span>x {qty}</span>
            <div className="quantity">
              <RemoveRounded
                className="itemRemove"
                onClick={() => updateQuantity("remove", itemId)}
              />

              <AddRounded
                className="itemAdd"
                onClick={() => updateQuantity("add", itemId)}
              />
            </div>
          </div>
        </div>
        <p className="itemPrice">
          <span className="dolorSign">$</span>
          <span className="itemPriceValue">{itemPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default Cart;
