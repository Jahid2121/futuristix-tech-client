import React from 'react';
import bannerImg from '../assets/hector-martinez-EG49vTtKdvI-unsplash.jpg'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div data-aos="zoom-in" className='static '>
            <img className=' mx-auto' src={bannerImg} alt="" />
            <div className='-mt-[600px] mb-72 text-center'>
            <h2 className=' font-bold text-5xl mb-4 text-[#F1EFEF]'>Shop the Latest Gadgets, <br /> Explore Limitless Possibilities!</h2>
            <Link to={'/Add Product'}><button className='btn bg-blue-600 border-0 text-white'>Add Product</button></Link>
            </div>
        </div>
    );
};

export default Banner;