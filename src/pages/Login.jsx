import React from "react";
import { Link } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="container my-5 py-3">
        {/* <h1 className="text-center mb-4">Login</h1> */}
        <div className="row justify-content-center align-items-center">
          {/* Image Column */}
          <div className="col-md-5">
            <img
              src="https://stories.freepiklabs.com/storage/1765/7-Login_Mesa-de-trabajo-1.svg"
              alt="Login Image"
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
                    <label htmlFor="email">Email address</label>
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
                    <label htmlFor="password">Password</label>
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
                    <p className="mb-0">
                      New Here?{" "}
                      <Link to="/register" className="text-info">
                        Register
                      </Link>
                    </p>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-primary btn-block"
                      type="submit"
                      disabled
                    >
                      Login
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

export default Login;
