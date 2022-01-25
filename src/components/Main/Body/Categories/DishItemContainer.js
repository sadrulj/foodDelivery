import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { useEffect } from "react";
import { Items } from "../../../../data";
import { actionType } from "../../../../reducer";
import { useStateValue } from "../../../../StateProvider";
let cartData = [];

const DishItemContainer = ({ itemId, imgSrc, name, price, ratings }) => {
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));

  const [isFavorite, setFavorite] = useState(false);

  const [{}, dispatch] = useStateValue();

  const [isCart, setCart] = useState(null);

  useEffect(() => {
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [dispatch, isCart]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  return (
    <div className="itemCard" id={itemId}>
      <div
        className={`isfavourite ${isFavorite ? "active" : ""}`}
        onClick={() => setFavorite(!isFavorite)}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img className="itemImg" src={imgSrc} alt={name} />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="rating">
            {Array.apply(null, { length: 5 }).map((e, i) => (
              <i
                key={i}
                className={`rating ${currentValue > i ? "orange" : "gray"}`}
                onClick={() => handleClick(i + 1)}
              >
                <StarRounded />
              </i>
            ))}
            <h3 className="price">
              <span>$ </span>
              {price}
            </h3>
          </div>
          <i
            className="addtoCart"
            onClick={() => {
              setCart(Items.find((n) => n.id === itemId));
            }}
          >
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
};

export default DishItemContainer;
