import React from "react";
import Foot from "./footer";
import Nav from "./Navbar";

const LayoutComponent = (props) => {
  return (
    <>
      <Nav />
      <div className="row">
        <div>{props.content}</div>
      </div>
      <Foot />
    </>
  );
};

export default LayoutComponent;
