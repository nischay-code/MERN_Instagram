import React, { useContext } from "react";
import logo from "../img/logo.png";
import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

export default function Navbar({ login }) {
  const navigate = useNavigate();
  const { setModalOpen } = useContext(LoginContext);
  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return [
        <li key="profile">
          <Link to="/profile">Profile</Link>
        </li>,
        <li key="createPost">
          <Link to="/createPost">Create Post</Link>
        </li>,
        <li key="following" style={{ marginLeft: "20px" }}>
          <Link to="/followingpost">My Following</Link>
        </li>,
        <li key="logout">
          <button className="primaryBtn" onClick={() => setModalOpen(true)}>
            Log Out
          </button>
        </li>,
      ];
    } else {
      return [
        <li key="signup">
          <Link to="/signup">SignUp</Link>
        </li>,
        <li key="signin">
          <Link to="/signin">SignIn</Link>
        </li>,
      ];
    }
  };

  const loginStatusMobile = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return [
        <li key="home">
          <Link to="/">
            <span className="material-symbols-outlined">home</span>
          </Link>
        </li>,
        <li key="profile">
          <Link to="/profile">
            <span className="material-symbols-outlined">account_circle</span>
          </Link>
        </li>,
        <li key="createPost">
          <Link to="/createPost">
            <span className="material-symbols-outlined">add_box</span>
          </Link>
        </li>,
        <li key="following" style={{ marginLeft: "20px" }}>
          <Link to="/followingpost">
            <span className="material-symbols-outlined">explore</span>
          </Link>
        </li>,

        <li key="logout" onClick={() => setModalOpen(true)}>
          <span className="material-symbols-outlined">logout</span>
        </li>,
      ];
    } else {
      return [
        <li key="signup">
          <Link to="/signup">
            <span className="material-symbols-outlined">person_add</span>
          </Link>
        </li>,
        <li key="signin">
          <Link to="/signin">
            <span className="material-symbols-outlined">login</span>
          </Link>
        </li>,
      ];
    }
  };

  return (
    <div className="navbar">
      <img
        id="insta-logo"
        src={logo}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />
      <>
        <ul className="nav-menu">{loginStatus()}</ul>
        <ul className="nav-mobile">{loginStatusMobile()}</ul>
      </>
    </div>
  );
}
