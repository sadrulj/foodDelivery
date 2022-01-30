import React, { useContext, useState } from "react";
import DishItemContainer from "./Categories/DishItemContainer";
import MenuContainer from "./Categories/MenuContainer";
import RowContainer from "./Categories/RowContainer";
import { MenuItems } from "../../../data";
import { useEffect } from "react";
import Context from "../../../store/Context";

const Categories = () => {
  const context = useContext(Context);
  const [isMainData, setMainData] = useState(
    context.items.filter((element) => element.itemId === "buger01")
  );
  const setData = (itemId) => {
    setMainData(context.items.filter((element) => element.itemId === itemId));
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
    console.log(context);
  }, [context, isMainData]);
  return (
    <div className="dishContainer">
      <MenuContainer />
      <RowContainer MenuItems={MenuItems} setData={setData} />
      <div className="dishItemContainer">
        {isMainData &&
          isMainData.map((data) => (
            <DishItemContainer
              key={data.id}
              id={data.id}
              imgSrc={data.imgSrc}
              name={data.name}
              ratings={data.ratings}
              price={data.price}
              addItemToCart={context.addItemToCart}
            />
          ))}
      </div>
    </div>
  );
};

export default Categories;
