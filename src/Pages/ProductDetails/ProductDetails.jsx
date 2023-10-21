import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Swal from "sweetalert2";

const ProductDetails = () => {
    const product = useLoaderData();
    const {_id, productName, price, brandName, description, image, ratings, type } =
    product;

    const handleAddToCart = product => {
      fetch('https://futuristix-tech-server-5fldsw6yr-jahid2121s-projects.vercel.app/cartProducts', {
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
    <div data-aos="flip-left" className="md:flex   hover:shadow-xl fixed mt-40 ">
      <figure>
        <img
        className="md:max-w-xl w-72 ml-2 md:w-full md:h-96"
          src={image}
          alt={productName}
        />
      </figure>
      <div className="card-body">
        <h2 className="font-bold text-3xl hover:text-blue-600">{productName}</h2>
        <p className="text-xl  font-medium">${price}</p>
        <p className="">{description}</p>
        <div className="card-actions justify-start">
          <button
          onClick={() => handleAddToCart(product)}
          className="btn mb-52 bg-blue-600 text-white">Add to Cart</button>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
