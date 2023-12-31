import React from "react";
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();
  const {_id, productName, price, brandName, description, image, ratings, type } = product;
  const handleUpdateProduct = e => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const ratings = form.ratings.value;
    const image = form.image.value;
    const updatedProduct = {
      productName,
      brandName,
      type,
      price,
      description,
      ratings,
      image,
    };
    console.log(updatedProduct);

    fetch(`https://futuristix-tech-server-5fldsw6yr-jahid2121s-projects.vercel.app/products/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 1) {
          Swal.fire({
            title: "Done!",
            text: "Product updated Successfully",
            icon: "success",
          });
        }
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <div
        style={{
          backgroundImage:
            "url('https://i.ibb.co/ZGt27Ys/alex-shutin-k-Kv-QJ6r-K6-S4-unsplash.jpg')",
        }}
        className="bg-cover z-20 pb-8"
      >
        <h2 className="text-center text-3xl pt-24 text-white font-bold">
          Update Product : {productName}
        </h2>
        <form onSubmit={handleUpdateProduct}>
          {/* Name and Brand Name Row */}
          <div className="md:flex gap-6 p-4 px-8">
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Product Name</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={productName}
                  name="productName"
                  type="text"
                  placeholder="Product Name"
                  className="input w-full  input-bordered"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Brand Name</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={brandName}
                  name="brandName"
                  type="text"
                  placeholder="e.g: Apple"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
          </div>
          {/* Type and Price Row */}
          <div className="md:flex gap-6 p-4 px-8">
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Type</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={type}
                  name="type"
                  type="text"
                  placeholder="e.g: phone, computer, headphone"
                  className="input w-full  input-bordered"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={price}
                  name="price"
                  type="text"
                  placeholder="Price in dollar"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
          </div>
          {/* Description and Rating Row */}
          <div className="md:flex gap-6 p-4 px-8">
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Short description</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={description}
                  name="description"
                  type="text"
                  placeholder="Short description..."
                  className="input w-full  input-bordered"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Ratings</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={ratings}
                  name="ratings"
                  type="text"
                  placeholder="Ratings(numbers only)"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
          </div>
          {/* Image Url Row */}
          <div className="form-control mx-auto md:w-1/2">
            <label className="label">
              <span className="label-text text-white text-center  mx-auto">
                Image URL
              </span>
            </label>
            <label>
              <input
              defaultValue={image}
                name="image"
                type="text"
                placeholder="e.g: https://i.ibb.co/..."
                className="input w-full input-bordered"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Update Product"
            className="text-center text-white bg-blue-600 border-0 px-16 btn-block  flex mx-auto btn my-3"
          />
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
