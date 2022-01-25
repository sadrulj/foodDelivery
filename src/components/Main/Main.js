import React from "react";
import Banner from "./Body/Banner";
import Card from "./Body/CartContainer/Card";
import Categories from "./Body/Categories";

const Main = () => {
  return (
    <main>
      <div className="mainContainer">
        <Banner />
        <Categories />
      </div>
      <div className="rightMenu">
        <Card />
      </div>
    </main>
  );
};

export default Main;
