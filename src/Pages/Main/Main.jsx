import React from "react";
import Header from "../../Components/Header/Header";
import AboutUs from "../AboutUs/AboutUs";
import Discoverpage from "../Discover/Discoverpage";
import Footer from "../Footer/Footer";
import GetTouch from "../GetTouch/GetTouch";
import Home from "../Home/Home";
import OrderContent from "../OrderContent/OrderContents";
import Service from "../Service/Service";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Main = () => {
  return (
    <Router>
      <div
        style={{
          width: "100%",
          overflowX:'hidden'
        }}
      >
        <Header />
        <Home />
        <Service />
        <OrderContent />
        <AboutUs />
        <GetTouch />
        <Discoverpage />
        <Footer />

        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/order" element={<OrderContent />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/get-touch" element={<GetTouch />} />
          <Route path="/discover" element={<Discoverpage />} />
        </Routes> */}

      </div>
    </Router>
  );
};

export default Main;
