import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="mycard">
        <div className="card auth-card input-field">
          <h2>Instagram</h2>
          <input type="text" placeholder="email" />
          <input type="password" placeholder="password" />
          <button className="btn waves-effect waves-light #64b5f6 blue darken-1">
            Login
          </button>
          <Link to="/">
            <p>Forgot password?</p>
          </Link>
          <h6>
            Don't have an account?{" "}
            <Link to="/signup">
              <b>Sign up</b>
            </Link>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Login;
