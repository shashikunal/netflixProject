import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import firebase from "./../../firebase";
import { toast } from "react-toastify";
import "./Auth.css";

let Styles = {
  color: "#fff",
  textDecoration: "none",
  background: "#222",
  padding: "2px 20px",
  fontSize: "12px",
};

const ForgotPassword = ({ history }) => {
  let [state, setState] = useState({
    email: "",
    loading: false,
  });

  let { email, loading } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      await firebase.auth().sendPasswordResetEmail(email);
      let Message = `email has been sent to ${email} please check and reset password`;
      toast.info(Message);
      history.push("/signin");
    } catch (err) {
      toast.error(err.message);
    }
    setState({ loading: false, email: "" });
  };
  return (
    <section id="AuthBlock" style={{ background: `url(images/poster.jpg)` }}>
      <article>
        <main>
          <h2>Password Reset</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                onChange={handleChange}
                type="text"
                name="email"
                value={email}
                required
                placeholder="enter email address"
              />
              <button>
                {loading === true ? "loading..." : "Password reset"}
              </button>
              <Link to="/signin" style={Styles}>
                back to signin
              </Link>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default withRouter(ForgotPassword);
