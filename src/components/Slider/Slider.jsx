import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



const Slider = ({Brand}) => {
    console.log(Brand);
    return (
        <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      {
        
            Brand?.map(product => <SwiperSlide key={product._id} product={product}><img src={product.image} alt="" /></SwiperSlide>)
          
      }
     
      ...
    </Swiper>
    );
};

export default Slider;