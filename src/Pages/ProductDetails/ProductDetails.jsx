import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar";

const ProductDetails = () => {
    const product = useLoaderData();
    const {_id, productName, price, brandName, description, image, ratings, type } =
    product;
  console.log(product);
  return (
    <>
    <Navbar></Navbar>
    <div className="flex hover:shadow-xl fixed mt-40 ">
      <figure>
        <img
        className="max-w-xl"
          src={image}
          alt={productName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl hover:text-blue-600">{productName}</h2>
        <p className="text-xl  font-medium">${price}</p>
        <p>{description}</p>
        <div className="card-actions justify-start">
          <button className="btn bg-blue-600 text-white">Add to Cart</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
