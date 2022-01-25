import React, { useState } from "react";
import DishItemContainer from "./Categories/DishItemContainer";
import MenuContainer from "./Categories/MenuContainer";
import RowContainer from "./Categories/RowContainer";
import { MenuItems, Items } from "../../../data";
import { useEffect } from "react";

const Categories = () => {
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId === "buger01")
  );
  const setData = (itemId) => {
    setMainData(Items.filter((element) => element.itemId === itemId));
  };
  useEffect(() => {
    const menuCards = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");
    function setMenuCardActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }
    menuCards.forEach((n) => n.addEventListener("click", setMenuCardActive));
  }, [isMainData]);
  return (
    <div className="dishContainer">
      <MenuContainer />
      <RowContainer MenuItems={MenuItems} setData={setData} />
      <div className="dishItemContainer">
        {isMainData &&
          isMainData.map((data) => (
            <DishItemContainer
              key={data.id}
              itemId={data.id}
              imgSrc={data.imgSrc}
              name={data.name}
              ratings={data.ratings}
              price={data.price}
            />
          ))}
      </div>
    </div>
  );
};

export default Categories;
