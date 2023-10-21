import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



const Slider = ({ findProducts}) => {
  const products = findProducts?.find(product => product)
  console.log(products);
    return (
        <Swiper 
      spaceBetween={1}
      slidesPerView={2.5}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {
        products?.image.map((img,idx) => <SwiperSlide  key={idx}><img className='w-80 h-64' src={img} alt="" /></SwiperSlide>)
      }

      
     
     <p className='text-center'> ...</p>
    </Swiper>
    );
};

export default Slider;