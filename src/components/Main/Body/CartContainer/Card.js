import React from "react";
import SubMenuContainer from "./SubMenuContainer";
import DeleteIcon from "@mui/icons-material/Delete";

const Card = ({ carts, removeItemFromCart, clearCart }) => {
  function sum(obj) {
    let sum = 0;
    for (var el in obj) {
      if (obj.hasOwnProperty(el)) {
        sum += parseFloat(obj[el]);
      }
    }
    return sum;
  }

  let totalPrice = carts.map(({ total }) => parseFloat(total));
  const total = sum(totalPrice);
  console.log(total);

  return (
    <>
      {carts.length === 0 ? (
        <div className="addSomeItem">
          <h2 className="cartTitle">Cart is Empty</h2>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
            alt=""
            className="emptyCart"
          />
        </div>
      ) : (
        <div className="cartCheckOutContianer toggleMenu">
          <div className="cartContainer">
            <SubMenuContainer />

            <div className="cartItems">
              {carts.map(({ item, quantity }) => (
                <div className="cart" id={item.itemId}>
                  <div className="imgBox">
                    <img src={item.imgSrc} alt={item.name} />
                  </div>
                  <div className="itemSection">
                    <h2 className="itemName">{item.name}</h2>
                    <div className="itemQuantity">
                      <span>x {quantity}</span>
                    </div>
                  </div>
                  <div className="itemPrice">
                    <span className="dolorSign">$</span>
                    <span className="itemPriceValue">
                      {item.price * quantity}
                    </span>
                  </div>
                  <div className="cancel">
                    <span onClick={() => removeItemFromCart(item.id)}>
                      <DeleteIcon />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {carts.length !== 0 && (
            <div className="totalSection">
              <h3>Total</h3>
              <p>
                <span>$ </span> {total}
              </p>
            </div>
          )}
          <button className="checkOut">Check Out</button>
          <button className="clear" onClick={() => clearCart()}>
            Clear
          </button>
        </div>
      )}
    </>
  );
};

export default Card;
