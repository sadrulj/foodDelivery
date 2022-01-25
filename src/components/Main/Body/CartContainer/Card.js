import React from "react";
import { useStateValue } from "../../../../StateProvider";
import Cart from "./Cart";
import SubMenuContainer from "./SubMenuContainer";

const Card = () => {
  const [{ cart, total }, dispatch] = useStateValue();
  return (
    <>
      {!cart ? (
        <div className="addSomeItem">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
            alt=""
            className="emptyCart"
          />
        </div>
      ) : (
        <div className="cartCheckOutContianer">
          <div className="cartContainer">
            <SubMenuContainer />

            <div className="cartItems">
              {cart &&
                cart.map((data) => (
                  <Cart
                    key={data.id}
                    itemId={data.id}
                    name={data.name}
                    imgSrc={data.imgSrc}
                    price={data.price}
                  />
                ))}
            </div>
          </div>
          <div className="totalSection">
            <h3>Total</h3>
            <p>
              <span>$ </span> {total}
            </p>
          </div>
          <button className="checkOut">Check Out</button>
        </div>
      )}
    </>
  );
};

export default Card;
