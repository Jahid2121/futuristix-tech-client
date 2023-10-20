import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const {_id, productName, price, brandName, description, image, ratings, type } =
  product 
  return (
    <>
      <div className="card   mt-10 bg-base-100 shadow-xl">
        <figure>
          
          <img className="max-w-80 max-h-52" src={image} alt={productName} />
        </figure>
        <div className="card-body">
         <div className="flex static">
         <h2 className="card-title">{productName}</h2>
          <p className="badge badge-ghost relative -mt-16  text-xl  ">{type}</p>
         </div>
         <div className="flex gap-5 items-center">
         <div>
          <p className="font-medium">{brandName}</p>
          <p className="font-medium text-xl">${price}</p>
          </div>
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
         </div>

          <div className="card-actions justify-end">
          <Link to={`/products/${_id}`}><div className="badge btn badge-outline">View Details</div></Link>
          <Link to={`/updateProduct/${_id}`}>
          <div
            className="badge btn badge-outline">Update</div>
          </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
