import React from 'react';
import { FaMobile, FaLaptop, FaClock, FaHeadphones, FaTools, FaHome, FaCode, FaNetworkWired } from 'react-icons/fa';

const iconsMap = {
    'FaMobile': FaMobile,
    'FaLaptop': FaLaptop,
    'FaClock': FaClock,
    'FaHeadphones': FaHeadphones,
    'FaTools': FaTools,
    'FaHome': FaHome,
    'FaCode': FaCode,
    'FaNetworkWired': FaNetworkWired,
};

const Service = ({service}) => {
    const {category,icon, description} = service;
    const IconComponent = iconsMap[icon] || FaMobile;
    return (
        <div>
            <div className='text-4xl items-center  justify-center flex'>
            <IconComponent />
            </div>
            <h3 className='font-medium text-center text-xl'>{category}</h3>
            <p className='font-extralight text-center'>{description}</p>
        </div>
    );
};

export default Service;