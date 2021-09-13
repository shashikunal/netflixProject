import React, { Fragment } from "react";
import LeftNavbar from "./LeftNavbar/LeftNavbar";
import "./Navbar.css";
import RightNavbar from "./RightNavbar/RightNavbar";
const Navbar = () => {
  return (
    <section id="navbarBlock">
      <article>
        <LeftNavbar />
        <RightNavbar />
      </article>
    </section>
  );
};

export default Navbar;
