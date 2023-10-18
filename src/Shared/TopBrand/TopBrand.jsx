import React from "react";
import Brand from "./Brand";

const TopBrand = ({products}) => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-7">Explore Top Brands</h2>

      <div className="grid grid-cols-3 gap-3">
        {
            products?.map(product => <Brand key={product.id} product={product}></Brand>)
        }
      </div>
    </div>
  );
};

export default TopBrand;
