import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon_logo"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          {/* EMAIL ADDRESS INPUT */}
          <h5>E-mail</h5>
          <input type="text" />

          {/* PASSWORD INPUT */}
          <h5>Password</h5>
          <input type="password" />

          <button>Sign-in</button>
        </form>
        <p>
          By signing in you agree to Amazon's Conditions of Use & sale. Please
          see our Privacy notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
      </div>
    </div>
  );
}

export default Login();
