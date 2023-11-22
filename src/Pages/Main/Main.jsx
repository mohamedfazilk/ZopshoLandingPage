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
  const isMobile = window.innerWidth <= 510;
  return (
    <div
      style={{
        width: "100%",
        overflowX:'hidden'
      }}
    >
      <Header />
      <Home />
      {isMobile ?(
        <>
          <Service />
          <OrderContent />
    
        </>
      ):(
        <>
         <OrderContent />
         <Service />
        </>
      )}
    
      <AboutUs />
      <GetTouch />
      <Discoverpage />
      <Footer />
    </div>
  );
};

export default Main;
