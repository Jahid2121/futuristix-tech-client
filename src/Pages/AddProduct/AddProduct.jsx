import React from "react";

const AddProduct = () => {
  return (
    <div className="bg-[#F4F3F0]">
      <h2 className="text-center text-3xl pt-24 font-bold">Add a Product</h2>
      {/* Name and Brand Name Row */}
      <div className="md:flex gap-6 p-4 px-8">
      <div className="form-control  md:w-1/2">
        <label className="label">
          <span className="label-text">Product Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Product Name"
            className="input w-full  input-bordered"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text">Brand Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="e.g: Apple"
            className="input w-full input-bordered"
          />
        </label>
      </div>
    </div>
      <div className="md:flex gap-6 p-4 px-8">
      <div className="form-control  md:w-1/2">
        <label className="label">
          <span className="label-text">Type</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="e.g: phone, computer, headphone"
            className="input w-full  input-bordered"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text">Price</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Price in dollar"
            className="input w-full input-bordered"
          />
        </label>
      </div>
    </div>
      <div className="md:flex gap-6 p-4 px-8">
      <div className="form-control  md:w-1/2">
        <label className="label">
          <span className="label-text">Short description</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Short description..."
            className="input w-full  input-bordered"
          />
        </label>
      </div>
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text">Rating</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Rating(numbers only)"
            className="input w-full input-bordered"
          />
        </label>
      </div>
      
    </div>
    <div className="form-control mx-auto md:w-1/2">
        <label className="label">
          <span className="label-text text-center  mx-auto">Image URL</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="e.g: https://i.ibb.co/..."
            className="input w-full input-bordered"
          />
        </label>
      </div>
      <button className="text-center bg-slate-400 px-16 flex mx-auto btn my-3">Add Product</button>
    </div>
  );
};

export default AddProduct;
