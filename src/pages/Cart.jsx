import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2 py-5 bg-light text-center">
            <p>Your Cart is Empty!</p>
            <Link to="/" className="btn btn-outline-primary mx-4">
              <i className="fas fa-shopping-cart"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });
    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-1">
            <div className="row d-flex justify-content-center my-2">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-body">
                    {state.map((item) => {
                      return (
                        <div key={item.id} className="mb-4">
                          <div className="row align-items-center">
                            <div className="col-lg-3 col-md-12">
                              <div className="bg-image rounded overflow-hidden">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="img-fluid"
                                />
                              </div>
                            </div>

                            <div className="col-lg-5 col-md-6">
                              <p>
                                <small>{item.title}</small>
                              </p>
                            </div>

                            <div className="col-lg-4 col-md-6">
                              <div className="d-flex align-items-center">
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => {
                                    removeItem(item);
                                  }}
                                >
                                  <i className="fas fa-minus"></i>
                                </button>
                                <p className="mx-3">{item.qty}</p>
                                <button
                                  className="btn btn-sm btn-success"
                                  onClick={() => {
                                    addItem(item);
                                  }}
                                >
                                  <i className="fas fa-plus"></i>
                                </button>
                              </div>
                              <p className="mt-2">
                                <p>
                                  <span className="text-muted">{item.qty}</span>{" "}
                                  x ${item.price}
                                </p>
                              </p>
                            </div>
                          </div>
                          <hr />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Order Summary</h5>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products ({totalItems})
                        <span className="text-primary">
                          ${subtotal.toFixed(2)}
                        </span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span className="text-primary">${shipping}</span>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                        </div>
                        <span>
                          <strong className="text-primary">
                            ${(subtotal + shipping).toFixed(2)}
                          </strong>
                        </span>
                      </li>
                    </ul>

                    <Link
                      to="/checkout"
                      className="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-1 py-1">
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <br /> <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Cart;
