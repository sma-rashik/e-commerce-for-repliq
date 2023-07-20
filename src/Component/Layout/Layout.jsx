import React from "react";
import Header from "../Header/Header";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {!noHeaderFooter && <Header />}
      <Outlet />
      {!noHeaderFooter && <Footer />}
    </div>
  );
};

export default Layout;
