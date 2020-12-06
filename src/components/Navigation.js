import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.jpeg";
// functional
const Navigation = () => {
  const userIsloggedIn = true;
  if (userIsloggedIn) {
    return (
      <nav className="navbar">
        <div>
        <Link to="/" className="navbrand"><img src={logo} alt="logo" /> <span className="navbrand-text">My-Portfolio</span></Link>
        </div>
        <ul className="nav">
          <li className="nav-list-item">
            <Link to="/addblog" className="nav-link">
              Add blog
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/profile" className="nav-link">
              My Profile
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/login" className="nav-link">
              login
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/HomePage" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-list-item">
            <Link to="/ContactMe" className="nav-link">
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
      
    );
  } else {
    return (
      <nav className="navbar">
        <div>
          <Link to="/" className="navbrand"><img src={logo} alt="logo" />my-portfolio</Link>
        </div>
        <ul className="nav">
          <li className="nav-list-item">
            <Link to="/HomePage" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-list-item">
            <Link to="/login" className="nav-link">
              login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export default Navigation;
