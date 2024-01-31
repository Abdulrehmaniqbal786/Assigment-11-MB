import React from "react";
import { Outlet } from "react-router-dom";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Scd_Footer } from "./Scd_Footer";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>



      <Outlet />

      <Footer/>
      <Scd_Footer/>


    </div>
  );
};