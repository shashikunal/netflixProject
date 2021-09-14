import React from "react";
import "./Auth.css";
const Register = () => {
  return (
    <section id="AuthBlock" style={{ background: `url(images/poster.jpg)` }}>
      <article>
        <h2>Sign up</h2>
        <form>
          <input
            type="text"
            name="email"
            placeholder="enter email/phone number"
          />
          <input type="password" name="password" placeholder="enter password" />
          <div>
            <button>Sign in</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default Register;
