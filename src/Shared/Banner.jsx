import React from 'react';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (

        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/JCJZR5F/hector-martinez-EG49v-Tt-Kdv-I-unsplash.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className=" font-bold  text-sm md:text-5xl w-40 md:w-full  md:mb-4 text-[#F1EFEF]">Shop the Latest Gadgets, <br /> Explore Limitless Possibilities!</h1>
     
      <Link to={'/Add Product'}><button className="btn bg-blue-600 text-white border-0">Add Product</button></Link>
    </div>
  </div>
</div>
    );
};

export default Banner;