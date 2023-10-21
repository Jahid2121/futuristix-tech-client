import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import CartProduct from "../../components/CartProduct/CartProduct";
import Navbar from "../../Shared/Navbar";

const Cart = () => {
  const loadedcartProducts = useLoaderData();
  const [cartProducts, setCartProducts] = useState(loadedcartProducts)

  console.log(cartProducts);
  return (
    <>
      <Navbar></Navbar>

      <div className="fixed mt-32  items-start">
      <div className="overflow-x-auto ">
        <table className="table  ">
          {/* head */}
          <thead  className="text-black">
            <tr>
                <hr />
                <div className="w-full  text-center flex justify-center items-center mx-auto  gap-8">
            <th></th>
            
              <th className=" grow text-xl">Product</th>
              <th className="text-xl ">Price</th>
              
                </div>
            </tr>
          </thead>
          <tbody>

        {cartProducts?.map((product) => (
          <CartProduct key={product._id} cartProducts={cartProducts} setCartProducts={setCartProducts} product={product}></CartProduct>
        ))}
        </tbody>

        </table>
        </div>

      </div>
    </>
  );
};

export default Cart;
