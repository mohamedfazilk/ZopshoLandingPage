import React from "react";
import Header from "../../Components/Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import Discoverpage from "../Discover/Discoverpage";
import Footer from "../Footer/Footer";
import GetTouch from "../GetTouch/GetTouch";
import Home from "../Home/Home";
import OrderContent from "../OrderContent/OrderContents";
import Service from "../Service/Service";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const Main = () => {
  const isMobile = window.innerWidth <= 510;
  return (
    <div
      style={{
        width: "100%",
        overflowX:'hidden'
      }}
    >
    <Router>
    <div>
    <Header />
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/service" element={<Service />} />
    
    </Routes>
  
    </div>
    </Router>
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
