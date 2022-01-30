import React, { useContext, useEffect } from "react";
import Banner from "./Body/Banner";
import Card from "./Body/CartContainer/Card";
import Categories from "./Body/Categories";
import Context from "../../store/Context";

const Main = () => {
  const context = useContext(Context);
  useEffect(() => {
    console.log(context);
  }, [context]);
  return (
    <main>
      <div className="mainContainer">
        <Banner />
        <Categories addItemToCart={context.addItemToCart} />
      </div>
      <div className="rightMenu">
        <Card
          carts={context.carts}
          removeItemFromCart={context.removeItemFromCart}
          clearCart={context.clearCart}
        />
      </div>
    </main>
  );
};

export default Main;
