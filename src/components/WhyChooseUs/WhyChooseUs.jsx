import React from 'react';
import transit from '../../assets/icons8-in-transit.gif'
import verified from '../../assets/icons8-verified.gif'
import warranty from '../../assets/icons8-warranty.gif'
const WhyChooseUs = () => {
    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-16'>Why Choose Us?</h2>
            <div className='grid grid-cols-1 mb-20 gap-4   md:grid-cols-2 lg:grid-cols-3 '>
                <div className=' p-6 bg-base-100 shadow '>
                    <img src={transit} alt="" />
                <h2 className='text-xl font-medium'>FAST AND FREE SHIPPING</h2>
                <p>Enjoy swift and complimentary shipping services: Fast and Free Shipping!</p>
                </div>

                <div className='mt-20 p-6  bg-blue-400 shadow-xl '>
                <img src={warranty} alt="" />
                <h2 className='text-xl text-white font-medium'>WARRANTY PROTECTION</h2>
                <p className='text-white'>Peace of mind guaranteed: comprehensive warranty protection for your purchase.</p>
                </div>

                <div className=' p-6 bg-base-100 shadow '>
                <img src={verified} alt="" />
                <h2 className='text-xl font-medium'>AUTHENTIC PRODUCT</h2>
                <p>only genuine, original products sourced for your satisfaction.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;