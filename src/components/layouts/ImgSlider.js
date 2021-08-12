// react 
import React from 'react'

// components 
import "../css/imgSlider.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {Navigation,Pagination,Mousewheel,Keyboard} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

const images = [
    { url : "https://cdn.discordapp.com/attachments/780443920571432970/874335024084832296/InUZKu.png", id: 1},
    { url : "https://cdn.discordapp.com/attachments/780443920571432970/874335007571849276/myLogo.png", id: 2},
    { url : "../../static/img/img-3.jpg", id: 3},
]

const ImgSlider = () => {
  
  
  
  return (
    <div className="imageSlider">
        <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">
            {images.map((item) =>
                <SwiperSlide key={item.id}> 
                    <img  src={item.url} alt="" />
                </SwiperSlide>
            )}

            <SwiperSlide>1</SwiperSlide>
        </Swiper>
    </div>
  )
}

export default ImgSlider;