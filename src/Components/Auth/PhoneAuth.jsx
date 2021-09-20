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

const PhoneAuth = ({ history }) => {
  let [state, setState] = useState({
    phone: "",
    loading: false,
  });

  let { phone, loading } = state;
  let handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });
      let recaptchaContainer = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );

      let confirmationMessage = await firebase
        .auth()
        .signInWithPhoneNumber(phone, recaptchaContainer);
      let OTPCODE = window.prompt("enter OTP");
      await confirmationMessage.confirm(OTPCODE);
      toast.success(`Successfully ${phone} number logged in`);
      history.push("/profile");
    } catch (error) {
      toast.error(error.message);
    }
    setState({ loading: false, phone: "" });
  };
  return (
    <section id="AuthBlock" style={{ background: `url(images/poster.jpg)` }}>
      <article>
        <main>
          <h2>Phone Auth</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                onChange={handleChange}
                type="text"
                name="phone"
                value={phone}
                required
                placeholder="enter phone number"
              />
              <div id="recaptcha-container"></div>
              <button>{loading === true ? "loading..." : "Send OTP"}</button>
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

export default withRouter(PhoneAuth);
