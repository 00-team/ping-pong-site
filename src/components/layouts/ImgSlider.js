// react 
import React from "react";


// Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
    Autoplay, Pagination, Navigation, EffectCoverflow
} from 'swiper/core';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectCoverflow]);


// style 
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import "../css/imgSlider.css"

import image1 from '../../static/img/img-1.jpg'
import image2 from '../../static/img/img-2.jpg'
import image8 from '../../static/img/img-8.jpg'


const images = [
    { img: image1, id: 1 },
    { img: image2, id: 2 },
    { img: image8, id: 3 },
]

const ImgSlider = () => {
    return (<>
        <Swiper 
            effect='coverflow'
            loop={true}
            spaceBetween={30} 
            centeredSlides={true} 
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }} 
            pagination={{
                clickable: true
            }} 
            navigation={true} 
            className="mySwiper"
        >
            {images.map((item, index) =>
                <SwiperSlide key={index}>
                    <img src={item.img} />
                </SwiperSlide>
            )}
        </Swiper>
    </>)
}

export default ImgSlider;
