import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <div className="container py-1">
        <div className="row my-4">
          <div className="col-md-5 col-lg-4 order-md-last">
            <div className="card mb-4">
              <div className="card-header py-3 bg-danger">
                <h5 className="mb-0 text-center text-white">Order Summary</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products ({totalItems})<span>${(subtotal).toFixed(2)}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>${shipping}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                    </div>
                    <span>
                      <strong>${(subtotal + shipping).toFixed(2)}</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-7 col-lg-8">
            <div className="card mb-4">
              <div className="card-header bg-danger text-light py-3">
                <h4 className="mb-0 text-center">Billing address</h4>
              </div>
              <div className="card-body">
                <form className="needs-validation" noValidate>
                  <div className="row g-3">
                    <div className="col-sm-6 my-1">
                      <label htmlFor="firstName" className="form-label">
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>

                    <div className="col-sm-6 my-1">
                      <label htmlFor="lastName" className="form-label">
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>

                    <div className="col-12 my-1">
                      <label htmlFor="email" className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@example.com"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter a valid email address for shipping updates.
                      </div>
                    </div>

                    <div className="col-12 my-1">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="1234 Main St"
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your shipping address.
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="address2" className="form-label">
                        Address 2 <span className="text-muted">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address2"
                        placeholder="Apartment or suite"
                      />
                    </div>

                    <div className="col-md-5 my-1">
                      <label htmlFor="country" className="form-label">
                        District
                      </label>
                      <br />
                      <select className="form-select" id="country" required>
                        <option value="">Choose...</option>

                        <option>Dhaka</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>

                    <div className="col-md-4 my-1">
                      <label htmlFor="state" className="form-label">
                        Area
                      </label>
                      <br />
                      <select className="form-select" id="state" required>
                        <option value="">Choose...</option>
                        <option>Gulshan</option>
                        <option>Banani</option>
                        <option>Baridhara</option>
                        <option>Bashundhara R/A</option>
                        <option>Uttara</option>
                        <option>Dhanmondi</option>
                        <option>Wari</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>

                    <div className="col-md-3 my-1">
                      <label htmlFor="zip" className="form-label">
                        Zip
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <h4 className="mb-3">Payment</h4>

                  <div className="row gy-3">
                    <div className="col-md-6">
                      <label htmlFor="cc-name" className="form-label">
                        Name on card
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        placeholder=""
                        required
                      />
                      <small className="text-muted">
                        Full name as displayed on card
                      </small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>

                    <div className="col-md-6">
                      <label htmlFor="cc-number" className="form-label">
                        Credit card number
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="cc-expiration" className="form-label">
                        Expiration
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-expiration"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Expiration date required
                      </div>
                    </div>

                    <div className="col-md-3">
                      <label htmlFor="cc-cvv" className="form-label">
                        CVV
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-cvv"
                        placeholder=""
                        required
                      />
                      <div className="invalid-feedback">
                        Security code required
                      </div>
                    </div>
                  </div>

                  <hr className="my-4" />

                  <button
                    className="w-100 btn btn-primary"
                    type="submit"
                    disabled
                  >
                    Confirm Payment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style>
        {`
          .container {
            max-width: 1200px;
          }

          .card {
            border: none;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          .card-header {
            background-color: #f8f9fa;
          }

          .btn-outline-dark {
            color: #343a40;
            border-color: #343a40;
          }

          .btn-outline-dark:hover {
            color: #fff;
            background-color: #343a40;
          }

          .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
          }

          .btn-primary:hover {
            background-color: #0056b3;
            border-color: #0056b3;
          }

          .form-control {
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
          }

          .invalid-feedback {
            color: red;
          }
        `}
      </style>
      <Navbar />
      <div className="container">
      
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
