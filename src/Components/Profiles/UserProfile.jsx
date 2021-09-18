import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../ContextApi/AuthContext";
import "./Profile.css";

const UserProfile = props => {
  let USER = useContext(AuthContext);
  let { displayName, photoURL, email } = USER;
  return (
    <section id="UserProfile">
      <article>
        <div className="profile_sidebar">
          <header>
            <figure>
              <Link to="/upload-profile-pic">
                <strong style={{ position: "relative" }}>
                  <span>
                    <i className="fas fa-edit"></i> Edit
                  </span>
                </strong>
              </Link>

              <img src={photoURL} alt={displayName} />
            </figure>
          </header>
          <main>
            <h4>{displayName}</h4>
            <p>
              <strong>{email}</strong>
            </p>
          </main>
        </div>
        <div className="profile_main">Main Profile Block</div>
      </article>
    </section>
  );
};

export default UserProfile;
