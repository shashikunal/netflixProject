import React, { useContext } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../ContextApi/AuthContext";
const LeftNavbar = () => {
  let USER = useContext(AuthContext);
  return (
    <div className="leftNavbar">
      <div className="logoBlock">
        <img src="netflix-logo.png" alt="logo" />
      </div>
      <div className="leftMenuBlock">
        {USER ? (
          <Fragment>
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
                <Link to="/upload-movie">Upload Movie</Link>
              </li>
              <li>
                <a href="/">New&popular</a>
              </li>
              <li>
                <a href="/">MyList</a>
              </li>
            </ul>
          </Fragment>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default LeftNavbar;
