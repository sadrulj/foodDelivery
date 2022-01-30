import "./App.css";
import React, { useContext, useEffect } from "react";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Context from "./store/Context";

function App() {
  const context = useContext(Context);
  useEffect(() => {
    console.log(context);
  }, [context]);
  return (
    <>
      <Header carts={context.carts} />
      <Main />
      <Footer />
    </>
  );
}

export default App;
