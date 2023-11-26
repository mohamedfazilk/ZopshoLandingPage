import React from "react";
import Header from "../../Components/Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import Discoverpage from "../Discover/Discoverpage";
import Footer from "../Footer/Footer";
import GetTouch from "../GetTouch/GetTouch";
import Home from "../Home/Home";
import OrderContent from "../OrderContent/OrderContents";
import Service from "../Service/Service";
import { Link, Element, scroller } from "react-scroll";

const Main = () => {
  const isMobile = window.innerWidth <= 510;
  return (
    <div
      style={{
        width: "100%",
        overflowX: 'hidden'
      }}
    >
      <Header />

      <Element name="home">
        <Home />
      </Element>

      {isMobile ? (
        <>
          <Element name="service">
            <Service />
          </Element>
          <OrderContent />

        </>
      ) : (
        <>
          <OrderContent />
          <Element name="service">
            <Service />
          </Element>

        </>
      )}

      <Element name="aboutUs">
        <AboutUs />
      </Element>
      <Element name="gettouch">
        <GetTouch />
      </Element>
      <Element name="discover">
        <Discoverpage />
      </Element>

      <Footer />
    </div>
  );
};

export default Main;
