import React from 'react';
import { Link } from 'react-router-dom';

const NoProduct = () => {
    return (
        <div className='w-full  text-center mt-16 ml-56'>
            <h2 className="text-3xl font-bold text-gray-400 text-center">Oops!</h2>
            <img className='w-40 flex mx-auto' src={'https://i.ibb.co/x37P2v9/icons8-no-512.png'} alt="" />
            <p className='text-gray-400'>We appreciate your interest in Samsung products! Currently, we do not have any Samsung products available in our inventory. Our selection is regularly updated, so we recommend checking back later to explore the latest Samsung offerings.

            In the meantime, feel free to explore our wide range of products from other top brands. We're sure you'll find something that piques your interest and meets your requirements. Thank you for visiting, and we look forward to serving you with Samsung products in the future.</p>
        <Link to="/Home"><button className='btn bg-blue-600 text-white mt-4'>Go Back</button></Link>
        </div>
    );
};

export default NoProduct;