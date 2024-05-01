import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import "./Products.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products/");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-12 py-5 text-center">
          <Skeleton height={40} width={560} />
        </div>
        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={460} />
        </div>
        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={460} />
        </div>
        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={460} />
        </div>
        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={460} />
        </div>
        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={460} />
        </div>
        <div className="col-md-4 col-sm-6 col-12 mb-4">
          <Skeleton height={460} />
        </div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };
  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-3">
          <button
            className="btn btn-outline-primary btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-success btn-sm m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-danger btn-sm m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-warning btn-sm m-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelery
          </button>
          <button
            className="btn btn-outline-info btn-sm m-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>

        {filter.map((product) => {
          return (
            <div
              id={product.id}
              key={product.id}
              className="col-md-4 col-sm-6 col-12 mb-4"
            >
              <div className="card text-center h-100" key={product.id}>
                <div className="image-container">
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt="Product"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">$ {product.price}</p>
                </div>
                <div className="card-footer">
                  <div className="card-btn-group">
                    <Link
                      to={"/product/" + product.id}
                      className="btn btn-primary btn-block btn-sm"
                    >
                      Buy Now
                    </Link>
                    <button
                      className="btn btn-warning btn-block btn-sm"
                      onClick={() => addProduct(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-2 py-1">
        <div className="row">
          <div className="col-12"></div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;
