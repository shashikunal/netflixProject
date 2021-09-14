import React from "react";

const LeftNavbar = () => {
  return (
    <div className="leftNavbar">
      <div className="logoBlock">
        <img src="netflix-logo.png" alt="logo" />
      </div>
      <div className="leftMenuBlock">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Tv Shows</a>
          </li>
          <li>
            <a href="/">Movies</a>
          </li>
          <li>
            <a href="/">New&popular</a>
          </li>
          <li>
            <a href="/">MyList</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftNavbar;
