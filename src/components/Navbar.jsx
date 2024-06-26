import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold fs-4 px-2 text" to="/">
          <span
            style={{
              fontFamily: "Arial",
              fontWeight: "bold",
              fontStyle: "italic",
              color: "#003366",
            }}
          >
            MartHub
          </span>
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark"
                to="/"
                activeClassName="active-link"
                exact
              >
                Home{" "}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark"
                to="/product"
                activeClassName="active-link"
              >
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark"
                to="/about"
                activeClassName="active-link"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-dark"
                to="/contact"
                activeClassName="active-link"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <NavLink
              to="/login"
              className="btn btn-outline-dark mx-2"
              style={{ fontFamily: "Arial", fontWeight: "bold" }}
            >
              <i className="fa fa-sign-in-alt mr-1"></i> Login
            </NavLink>
            <NavLink
              to="/register"
              className="btn btn-outline-dark mx-2"
              style={{ fontFamily: "Arial", fontWeight: "bold" }}
            >
              <i className="fa fa-user-plus mr-1"></i> Register
            </NavLink>
            <NavLink
              to="/cart"
              className="btn mx-2 btn-danger "
              style={{
                fontFamily: "Arial",
                fontWeight: "bold",
              }}
            >
              <i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length}){" "}
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
