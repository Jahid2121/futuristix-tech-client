import React from "react";
import { FaXmark } from "react-icons/fa6";
const CartProduct = ({ product }) => {
  const {
    _id,
    productName,
    price,
    brandName,
    description,
    image,
    ratings,
    type,
  } = product;
  return (
    <div>
      <div className="ml-8 text-3xl">
       
      
            {/* row 1 */}
            <tr>
              <td>
                <label>
                <FaXmark />
                </label>
              </td>
              <td>
                <div className="flex w-[500px] ml-8 items-center space-x-3">
                  <div className="avatar">
                    <div className="mask rounded-full mr-4mask-squircle w-12 h-12">
                      <img
                        src={image}
                        alt={productName}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{productName}</div>
                    <div className="text-sm opacity-50">{brandName}</div>
                  </div>
                </div>
              </td>
              <td>
              <span className="text-xl text-black">
                  ${price}
                  </span>
                <br />
                
              </td>
          
            </tr>
        
      </div>
    </div>
  );
};

export default CartProduct;
