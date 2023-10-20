import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';



const Slider = ({Brand}) => {
    console.log(Brand);
    return (
        <Swiper 
      spaceBetween={10}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      {
        
            Brand?.map(product => <SwiperSlide data-aos="fade-left" key={product._id} product={product}><img className='w-80 h-64' src={product.image} alt="" /></SwiperSlide>)
          
      }
     
     <p className='text-center'> ...</p>
    </Swiper>
    );
};

export default Slider;