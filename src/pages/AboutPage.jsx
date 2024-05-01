import React from "react";
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-4 py-1">
        <h1 className="text-center mb-4">About Us</h1>

        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <p className="lead text-center">
              Welcome to our online store! We offer high-quality products and
              exceptional service to our customers.
            </p>
            <p>
              Our goal is simple: to provide a seamless shopping experience with
              a wide range of products. From trendy clothing to electronics and
              jewelry, we've got you covered.
            </p>
            <p>
              We pride ourselves on curating the best items for our customers.
              Quality and style are our top priorities, ensuring you'll find
              something you love every time you shop with us.
            </p>
            <p>
              Thank you for choosing us for your shopping needs. We look forward
              to serving you and making your online shopping experience
              enjoyable and convenient.
            </p>
          </div>
        </div>
        <h2 className="text-center my-5">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Men's Clothing"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Men's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Women's Clothing"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Jewelry"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelry</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img
                className="card-img-top img-fluid"
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Electronics"
                height={160}
              />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
