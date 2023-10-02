import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
