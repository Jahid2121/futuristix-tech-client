import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';


const Slider = ({ findProducts}) => {
  const products = findProducts?.find(product => product)
  console.log(products);
    return (
        <Swiper  className='static'
      spaceBetween={1}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      slidesPerView={2}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {
        products?.image.map((img,idx) => <SwiperSlide  key={idx}><img className='w-80 h-64' src={img} alt="" /></SwiperSlide>)
        
      }
      <div className="relative bg-green-900">
        <div className="swiper-button-next">Next</div>
        <div className="swiper-button-prev">Prev</div>
        <div className="-mt-20    relative ">
        <div style={{}} className="swiper-button-next  mr-96"></div>
        <div className="swiper-button-prev"></div>
        </div>
        </div>
        <div className="-mt-20    relative ">
        <div style={{}} className="swiper-button-next "></div>
        <div className="swiper-button-prev"></div>
        </div>
      
     
     <p className='text-center'> ...</p>

     
    </Swiper>
    );
};

export default Slider;