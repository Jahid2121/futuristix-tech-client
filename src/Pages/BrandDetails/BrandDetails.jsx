import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Product from "../../components/Product/Product";
import NoProduct from "../../components/NoProduct/NoProduct";
import Slider from "../../components/Slider/Slider";

const BrandDetails = () => {
  const { brand_name } = useParams();
  const products = useLoaderData();
  const Brand = products?.filter((data) => data.brandName === brand_name);
  return (
    <>
    <Navbar></Navbar>
    <br />
      <div className=" mt-28 mb-12">
      <Slider Brand={Brand}></Slider>
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 ">
        {
          (brand_name === 'Samsung') ?
            <NoProduct></NoProduct>
          :
        
            Brand?.map(product => <Product key={product._id} product={product}></Product>)
          
        }
        
    </div>
    </>
  );
};

export default BrandDetails;
