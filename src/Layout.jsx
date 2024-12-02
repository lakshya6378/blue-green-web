import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";
import TagDescription from "./components/TagDescription";

const Layout = ({ children, triggerfunction }) => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header triggerfunction={triggerfunction} />
        {children}
        <ButtonGradient />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
