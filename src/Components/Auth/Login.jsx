import React from "react";
import "./Auth.css";

const Login = () => {
  return (
    <section id="AuthBlock" style={{ background: `url(images/poster.jpg)` }}>
      <article>
        <main>
          <h2>Sign in</h2>
          <form>
            <input
              type="text"
              name="email"
              placeholder="enter email/phone number"
            />
            <input
              type="password"
              name="password"
              placeholder="enter password"
            />
            <div>
              <button>Sign in</button>
            </div>
          </form>
        </main>
      </article>
    </section>
  );
};

export default Login;
