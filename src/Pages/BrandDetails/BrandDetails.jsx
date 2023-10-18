import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Product from "../../components/Product/Product";

const BrandDetails = () => {
  const { brand_name } = useParams();
  const products = useLoaderData();
  const Brand = products?.find((data) => data.brandName === brand_name);
  console.log(Brand);
  const { productName, brandName, description, image, price, ratings, type } =
    Brand;
  return (
    <>
    <Navbar></Navbar>
    <div>
        <Product Brand={Brand}></Product>
    </div>
    </>
  );
};

export default BrandDetails;
