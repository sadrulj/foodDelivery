import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";
import React, { useState } from "react";

const DishItemContainer = ({ addItemToCart, ...props }) => {
  const [currentValue, setCurrentValue] = useState(Math.floor(props.ratings));

  const [isFavorite, setFavorite] = useState(false);

  const handleClick = (value) => {
    setCurrentValue(value);
  };
  return (
    <div className="itemCard" id={props.itemId} key={props.id}>
      <div
        className={`isfavourite ${isFavorite ? "active" : ""}`}
        onClick={() => setFavorite(!isFavorite)}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img className="itemImg" src={props.imgSrc} alt={props.name} />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{props.name}</h3>
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
              {props.price}
            </h3>
          </div>
          <i className="addtoCart" onClick={() => addItemToCart({ ...props })}>
            <AddRounded />
          </i>
        </div>
      </div>
    </div>
  );
};

export default DishItemContainer;
