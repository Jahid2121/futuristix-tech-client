import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState()


    useEffect(() => {
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (

       <>
       <div>
       </div>
        <div className='my-16'>
            <h2 className='text-4xl  text-center mb-4 font-bold'>Our Services</h2>
            <p className='text-center mb-8'>At FUTURISTIX, we are committed to providing top-notch technology solutions tailored to meet your needs. Explore our wide range of services designed to enhance your digital experience and make your tech dreams come true.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6'>
            {
                services?.map((service,idx )=> <Service key={idx}  service={service}></Service>)
            }
            </div>
        </div>
       </>
    );
};

export default Services;