import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const product = useLoaderData();
    const {_id, productName, price, brandName, description, image, ratings, type } =
    product;
  console.log(product);
  return (
    <div className="card ">
      <figure>
        <img
        className="max-w-xs"
          src={image}
          alt={productName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{productName}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
