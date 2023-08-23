
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import About from "../pages/About";
import Contact from "../pages/Contact";
import Checkout from "./Checkout1"
;


const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default Routing;