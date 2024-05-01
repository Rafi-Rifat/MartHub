import React from "react";
const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3 d-flex justify-content-between">
        <div
          className="card bg-dark text-white border-0 mx-3"
          style={{ flex: "1" }}
        >
          {/* Add your content here */}
        </div>
        <div className="d-flex align-items-center mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/banner.jpg"
            alt="Card"
            style={{ width: "50%", height: "auto" }}
          />
          <p
            className="m-0 ms-2 animated-text"
            data-text="Discover a world of elegance"
            style={{
              fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              fontSize: "58px",
              color: "#FF007F",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Discover a world of elegance!
          </p>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-4 g-4">
        {/* Feature Card 1 */}
        <div className="col">
          <div
            className="card h-100"
            style={{ backgroundColor: "#CCE5FF", color: "black" }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              {" "}
              <i className="bi bi-truck fs-2 mb-3"></i>
              <h5 className="card-title">Low Shipping Cost</h5>
              <p className="card-text" style={{ fontSize: "16px" }}>
                {" "}
                Enjoy low shipping costs for all your purchases.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Card 2 */}
        <div className="col">
          <div
            className="card h-100"
            style={{ backgroundColor: "#FFCCE5", color: "black" }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              {" "}
              <i className="bi bi-lock fs-2 mb-3"></i>
              <h5 className="card-title">Safe Payment</h5>
              <p className="card-text" style={{ fontSize: "16px" }}>
                Make payments securely with our trusted payment gateway.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Card 3 */}
        <div className="col">
          <div
            className="card h-100"
            style={{ backgroundColor: "#FFFFCC", color: "Black" }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              {" "}
              <i className="bi bi-tags fs-2 mb-3"></i>
              <h5 className="card-title">Original Products</h5>
              <p className="card-text" style={{ fontSize: "16px" }}>
                Shop confidently knowing that all our products are original.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Card 4 */}
        <div className="col">
          <div
            className="card h-100"
            style={{ backgroundColor: "#CCFFFF", color: "black" }}
          >
            <div className="card-body d-flex flex-column justify-content-center align-items-center">
              {" "}
              <i className="bi bi-shield-check fs-2 mb-3"></i>
              <h5 className="card-title">Back Guarantee</h5>
              <p className="card-text" style={{ fontSize: "16px" }}>
                We offer a money-back guarantee on all purchases.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
