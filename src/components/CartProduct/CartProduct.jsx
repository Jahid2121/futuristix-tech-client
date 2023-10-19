import React from "react";
import { FaXmark } from "react-icons/fa6";
import Swal from "sweetalert2";
const CartProduct = ({ product }) => {
  const handleDelete = _id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cartProducts/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount === 1) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };

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
        {/* row  */}
        <tr>
          <td>
            <label>
              <button onClick={() => handleDelete(_id)}>
                <FaXmark />
              </button>
            </label>
          </td>
          <td>
            <div className="flex w-[500px] ml-8 items-center space-x-3">
              <div className="avatar">
                <div className="mask rounded-full mr-4 mask-squircle w-12 h-12">
                  <img src={image} alt={productName} />
                </div>
              </div>
              <div>
                <div className="font-bold">{productName}</div>
                <div className="text-sm opacity-50">{brandName}</div>
              </div>
            </div>
          </td>
          <td>
            <span className="text-xl text-black">${price}</span>
            <br />
          </td>
        </tr>
      </div>
    </div>
  );
};

export default CartProduct;
