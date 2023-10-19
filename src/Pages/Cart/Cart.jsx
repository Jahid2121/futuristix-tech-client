import React from "react";
import { useLoaderData } from "react-router-dom";
import CartProduct from "../../components/CartProduct/CartProduct";
import Navbar from "../../Shared/Navbar";

const Cart = () => {
  const cartProducts = useLoaderData();
  console.log(cartProducts);
  return (
    <>
      <Navbar></Navbar>

      <div className="fixed mt-20">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>

        {cartProducts?.map((product) => (
          <CartProduct key={product._id} product={product}></CartProduct>
        ))}
        </tbody>

        </table>

      </div>
    </>
  );
};

export default Cart;
