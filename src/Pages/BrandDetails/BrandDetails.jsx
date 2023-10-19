import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Product from "../../components/Product/Product";

const BrandDetails = () => {
  const { brand_name } = useParams();
  const products = useLoaderData();
  console.log(products);
  const Brand = products?.filter((data) => data.brandName === brand_name);
  console.log(Brand);
  return (
    <>
    <Navbar></Navbar>
    <div className="grid grid-cols-1 md:grid-cols-2">
        {
            Brand?.map(product => <Product key={product._id} product={product}></Product>)
        }
        
    </div>
    </>
  );
};

export default BrandDetails;
