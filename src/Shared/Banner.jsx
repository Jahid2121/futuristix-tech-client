import React from 'react';
import bannerImg from '../assets/hector-martinez-EG49vTtKdvI-unsplash.jpg'
const Banner = () => {
    return (
        <div className=''>
            <img className='h-[650px] mx-auto' src={bannerImg} alt="" />
            <div className='-mt-96 text-center'>
            <h2 className=' font-bold text-5xl mb-4 text-[#F1EFEF]'>Shop the Latest Gadgets, <br /> Explore Limitless Possibilities!</h2>
            <button className='btn bg-blue-600 border-0 text-white'>Explore Gadgets</button>
            </div>
        </div>
    );
};

export default Banner;