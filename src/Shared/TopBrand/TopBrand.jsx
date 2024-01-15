import React from "react";
import Brand from "./Brand";

const TopBrand = ({products}) => {
  console.log(products);
  return (
    <>
    <div data-aos="fade-up" className="text-center mt-32 ">
      <h2 className="md:text-5xl text-2xl font-bold mb-7">Explore Top Brands</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {
            products?.map(product => <Brand key={product.id} product={product}></Brand>)
        }
      </div>

    </div>
    </>
  );
};

export default TopBrand;
