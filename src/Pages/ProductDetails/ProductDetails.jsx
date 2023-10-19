import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const product = useLoaderData();
    const {_id, productName, price, brandName, description, image, ratings, type } =
    product;

    const handleAddToCart = product => {
      fetch('http://localhost:5000/cartProducts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(product)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Product added Successfully',
            icon: 'success',
          })
        }
      })
    }
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
          <button
          onClick={() => handleAddToCart(product)}
          className="btn bg-blue-600 text-white">Add to Cart</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
