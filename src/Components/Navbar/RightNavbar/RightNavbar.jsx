import React from "react";
import { Link } from "react-router-dom";
import "./RightNavbar.css";
const RightNavbar = () => {
  return (
    <div className="rightNavbar">
      <ul className="authMenu">
        <li>
          <a href="/">
            <span>
              <i className="fas fa-globe"></i>
            </span>
            English
          </a>
        </li>
        <li>
          <Link to="/signin">Sign in</Link>
        </li>
      </ul>
    </div>
  );
};

export default RightNavbar;
