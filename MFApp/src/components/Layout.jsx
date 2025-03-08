import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const layout = (props) => {
  return (
    <>
      <Header cart={props.cart} />
      <div style={{ height: "87vh" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default layout;
