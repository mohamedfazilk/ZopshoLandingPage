import React from "react";
import Header from "../../Components/Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import Discoverpage from "../Discover/Discoverpage";
import Footer from "../Footer/Footer";
import GetTouch from "../GetTouch/GetTouch";
import Home from "../Home/Home";
import OrderContent from "../OrderContent/OrderContents";
import Service from "../Service/Service";

const Main = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Header />
      <Home />
      <OrderContent />
      <Service />
      <AboutUs />
      {/* <GetTouch /> */}
      {/* <Discoverpage /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default Main;
