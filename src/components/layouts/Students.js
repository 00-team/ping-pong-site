import React, { useEffect, useState } from 'react'

import { SliderData } from '../elements/SliderData'
import StudentSlider from '../elements/studentSlider'

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

// css
import "./sass/students.scss"


//imgs
import radin        from "../../static/students/radin.jpg"
import nilia        from '../../static/students/nilia.jpg'
import shaghayegh   from '../../static/students/shaghayegh.jpg'

const images = [
    { img: radin,      discription: ' رادین خیام قهرمان کشور و دارنده رنکینگ جهانی', id: 1 },
    { img: nilia,      discription: 'نیلیا نقیبی دارنده مقام اول در مسابقات کشوری', id: 2 },
    { img: shaghayegh, discription: 'شقایث شهریاری نایب قهرمان لیگ بزرگسالان', id: 3 },
]

//
const Students = (props) => {


    return (
        <div className='students'>
            <h1
                className='fa center'
                id='students'
                style={{ textAlign: 'center' }}
            >
                شاگردان محمود ریزبند
            </h1>
            <div className='students_vids container'>
                
            </div>
        </div>
    )
}

export default Students
