import React from 'react';
import bannerImg from '../assets/hector-martinez-EG49vTtKdvI-unsplash.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div  className=''>
            <img className='w-[390px]  md:w-full mx-auto' src={bannerImg} alt="" />
            <div className='md:-mt-[600px] -mt-40 mb-20 md:mb-72 w-40 text-center'>
            <h2 className=' font-bold  text-sm md:text-5xl w-40 ml-20 md:w-full md:mb-4 text-[#F1EFEF]'>Shop the Latest Gadgets, <br /> Explore Limitless Possibilities!</h2>
            <Link to={'/Add Product'}><button className='relative ml-28 mt-3 btn bg-blue-600 border-0 text-white'>Add Product</button></Link>
            </div>
        </div>
    );
};

export default Banner;