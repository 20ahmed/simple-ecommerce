import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import axios from "axios";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getData();
    getCat();
  }, []);
  async function getData() {
    let { data } = await axios.get("https://fakestoreapi.com/products");
    setProducts(data);
  }

  async function getCat() {
    let { data } = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCategory(data);
  }

  async function getCatType(catName) {
    let { data } = await axios.get(
      `https://fakestoreapi.com/products/category/${catName}`
    );
    console.log(data);
    setProducts(data);
    console.log(catName);
  }
  return (
    <>
      {/*<Link to="add">
          <button className="btn btn-outline-success mb-2">
            Add New Product
          </button>
  </Link>*/}
      <h1 className="text-capitalize text-center my-4 p-3 bg-success ">
        our products
      </h1>
      <div className="d-grid gap-2 d-sm-block text-center my-3">
        <button onClick={getData} className="btn btn-outline-success">
          all
        </button>
        {category.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              getCatType(cat);
            }}
            className=" btn btn-outline-info mx-2   "
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="m-auto px-5 container ">
        <div className="d-flex row col ">
          {products.map((product, index) => (
            <div key={index} className="card m-2  " style={{ width: "18rem" }}>
              <img
                className="card-img-top img-thumbnail"
                src={product.image}
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <a href="#/" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
