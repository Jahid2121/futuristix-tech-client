import React from "react";

const Product = ({ Brand }) => {
  const { productName, price, brandName, description, image, ratings, type } =
    Brand;
  return (
    <>
      <div className="card   mt-10 bg-base-100 shadow-xl">
        <figure>
          <p className="badge badge-ghost text-xl -ml-16 -mt-96 ">{type}</p>
          <img src={image} alt={productName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p className="font-medium">{brandName}</p>
          <p className="font-medium text-xl">${price}</p>
          {/* ratings */}
          <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star"
              checked
            />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>

          <div className="card-actions justify-end">
            <div className="badge btn badge-outline">View Details</div>
            <div className="badge btn badge-outline">Update</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
