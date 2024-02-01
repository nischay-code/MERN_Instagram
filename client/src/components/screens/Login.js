/* eslint-disable no-useless-escape */
import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import Toast from "materialize-css";
import { UserContext } from "../../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [password, setPasword] = useState("");
  const [email, setEmail] = useState("");

  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      Toast.toast({ html: "Invalid Email", classes: "#c62828 red darken-3" });
      return;
    }
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          Toast.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          Toast.toast({
            html: "Login Successfully",
            classes: "#43a047 green darken-1",
          });
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="mycard">
        <div className="card auth-card input-field">
          <h2>Instagram</h2>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPasword(e.target.value)}
          />
          <button
            className="btn waves-effect waves-light #64b5f6 blue darken-1"
            onClick={() => {
              PostData();
            }}
          >
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
