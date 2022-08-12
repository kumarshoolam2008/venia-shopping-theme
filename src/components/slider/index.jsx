import React from "react";
// import Swiper core and required modules
import { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import "../../styles/slider.scss"

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><div className="banner">
          <div className="slidercontent">
            <h1>Shop the new <br />Signature Collection</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <button>Shop Now</button>
          </div>
          <img src="https://getkart.in/pub/media/catalog/category/mens_clothing-min_3.jpg" alt="" />
          </div>
          </SwiperSlide>
          <SwiperSlide><div className="banner">
          <div className="slidercontent">
            <h1>Shop the new <br />Signature Collection</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <button>Shop Now</button>
          </div>
          <img src="https://i.pinimg.com/originals/88/65/13/8865132dde1282f0b422c3bf87a39e20.jpg" alt="" />
          </div>
          </SwiperSlide>
          <SwiperSlide><div className="banner">
          <div className="slidercontent">
            <h1>Shop the new <br />Signature Collection</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <button>Shop Now</button>
          </div>
          <img src="https://getkart.in/pub/media/catalog/category/mens_clothing-min_3.jpg" alt="" />
          </div>
          </SwiperSlide>
        
      </Swiper>
    </>
  );
}
