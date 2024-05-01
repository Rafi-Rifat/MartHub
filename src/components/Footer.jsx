import React from "react";

const Footer = () => {
  // Function to open Google Maps with specified location
  const openLocation = () => {
    // Replace latitude and longitude with your desired coordinates
    window.open("https://www.google.com/maps?q=CSE+Building+Dhaka+University");
  };

  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 text-center">
         <h3>MartHub</h3>
         <p>Discover a world of elegance!</p>
            <p className="mt-3">All rights reserved &copy; 2024 MartHub</p>
          </div>
          <div className="col-md-6 text-center">
            <div className="contact-info">
              <p className="mb-1">Get in Touch</p>
              <p className="mb-1">
                <i className="fas fa-envelope"></i> rafialsaadrifat@gmail.com
              </p>
              <p
                className="mb-1"
                onClick={openLocation}
                style={{ cursor: "pointer" }}
              >
                <i className="fas fa-map-marker-alt"></i> CSE Building, Dhaka
                University
              </p>
            </div>
            <a
              href="https://github.com/Rafi-Rifat"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none text-light fs-4"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
