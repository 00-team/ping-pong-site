// react 
import React from "react";

// components 
import "../css/imgSlider.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"



// import Swiper core and required modules
import SwiperCore, {
  Autoplay,Pagination,Navigation,EffectCoverflow
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Autoplay,Pagination,Navigation,EffectCoverflow]);

const images = [
    { url : "https://cdn.discordapp.com/attachments/780443920571432970/874335024084832296/InUZKu.png", id: 1},
    { url : "https://cdn.discordapp.com/attachments/780443920571432970/874335007571849276/myLogo.png", id: 2},
    { url : "../../static/img/img-3.jpg", id: 3},
]

const ImgSlider = () => { 
  
  return (
    <>    
        <Swiper effect={'coverflow'} spaceBetween={30} centeredSlides={true} autoplay={{"delay": 2500,"disableOnInteraction": false}} pagination={{"clickable": true}} navigation={true} className="mySwiper">
            {images.map((item) =>
                <SwiperSlide><img src={item.url} /></SwiperSlide>
            )}
        </Swiper>
    </>
  )

}

export default ImgSlider;