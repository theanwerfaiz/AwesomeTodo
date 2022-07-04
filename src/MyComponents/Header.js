import React from "react";
import PropTypes from "prop-types";
import { Outlet, Link } from "react-router-dom";

export default function Header(props) {
  const isExpended = () => {
    let toggleButton = document.getElementsByClassName("toggle-button")[0];
    let navbarLinks = document.getElementsByClassName("navbar-links")[0];
    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="brand-title">{props.title}</div>
        <a
          to={undefined}
          className="toggle-button"
          onClick={() => {
            isExpended();
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </a>
        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* <Link to={voidUrl}  className="nav-item">Feedback</Link> */}
          {/* <Link to={voidUrl}  className="nav-item">Sign Up</Link> */}
          {/* <Link to={voidUrl}  className="nav-item">Sign In</Link> */}
          {/* <Link to={voidUrl} className="nav-item">Sign Out</Link> */}
        </div>
      </nav>
      <Outlet />
    </>
  );
}
//Default proptypes
Header.defaultProps = {
  title: "Awesome Todos",
};

//Hard type checking
Header.propTypes = {
  title: PropTypes.string,
};
