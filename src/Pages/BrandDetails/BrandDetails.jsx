import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import Product from "../../components/Product/Product";
import NoProduct from "../../components/NoProduct/NoProduct";
import Slider from "../../components/Slider/Slider";
import Footer from "../../components/Footer/Footer";
import useProducts from "../../hooks/useProducts";

const BrandDetails = () => {
  const [advertiseProducts, setAdvertiseProducts] = useState()
  const { brand_name } = useParams();
  
  const [products] = useProducts();
  const Brand = products?.filter((data) => data.brandName.toLowerCase() === brand_name.toLowerCase());
  const findProducts = advertiseProducts?.filter((data) => data.brand_name.toLowerCase() === brand_name.toLowerCase())
  useEffect(() => {
    fetch("/https://futuristix-tech-server.vercel.app/products")
    .then(res => res.json())
    .then(data => setAdvertiseProducts(data))
  },[])


  return (
    <>
    <Navbar></Navbar>
    <br />
      <div className=" mt-28 mb-12">
      {
  
  

    
    <h2 className="text-center text-4xl mb-9 font-bold">{brand_name}</h2> 
    
      }
      {
        (brand_name === 'Samsung') || <Slider findProducts={findProducts}></Slider>
      }
      
      </div>
    <div className="grid grid-cols-1 md:grid-cols-2 ">
        {
          (brand_name === 'Samsung') ?
            <NoProduct></NoProduct>
          :
        
            Brand?.map(product => <Product  key={product._id} product={product}></Product>)
          
        }
        
    </div>
    <Footer></Footer>
    </>
  );
};

export default BrandDetails;
