import React from "react";
import { Footer, Navbar } from "../components";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4 py-1">
        <div className="row justify-content-center align-items-center">
          {" "}
          {/* Image Column */}
          <div className="col-md-4">
            <img
              src="https://t4.ftcdn.net/jpg/05/23/69/07/360_F_523690716_4LGXJ6NH9Mbg1zKUEaW7sPD4tGeqZWFv.jpg"
              alt="Register Image"
              className="img-fluid rounded"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
          {/* Form Column */}
          <div className="col-md-5">
            <div className="card shadow-lg rounded">
              <div className="card-body bg-white" style={{ height: "auto" }}>
                <form>
                  <div className="form-group">
                    <label htmlFor="fullName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Enter your full name"
                      required
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                      required
                      style={{ fontSize: "16px" }}
                    />
                  </div>
                  <div className="form-group">
                    <p className="mb-0" style={{ fontSize: "14px" }}>
                      Already have an account?{" "}
                      <Link to="/login" className="text-info">
                        Login
                      </Link>
                    </p>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      disabled
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
