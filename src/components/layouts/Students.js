import React, { useEffect, useState } from 'react'

// icons 
import { FcPrevious, FcNext } from 'react-icons/fc'

// componenets
import Glories from './Glories'

// css
import './sass/students.scss'

//imgs
import radin from '../../static/students/radin.jpg'
import nilia from '../../static/students/nilia.jpg'
import shaghayegh from '../../static/students/shaghayegh.jpg'

const images = [
    {
        img: radin,
        discription: ' رادین خیام قهرمان کشور و دارنده رنکینگ جهانی',
        id: 1,
    },
    {
        img: nilia,
        discription: 'نیلیا نقیبی دارنده مقام اول در مسابقات کشوری',
        id: 2,
    },
    {
        img: shaghayegh,
        discription: 'شقایق شهریاری نایب قهرمان لیگ بزرگسالان',
        id: 3,
    },
]

//
const Students = props => {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        console.log(slideIndex,images.length)
        if (slideIndex !== images.length) {
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === images.length) {
            setSlideIndex(1)
        }
    }
    
    const prevSlide = () => {
        console.log(slideIndex,images.length)
        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 0) {
            setSlideIndex(images.length - 1)
        }
    }
    
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
                <div className='cards__container'>
                    <div className="btns prev"> <FcPrevious size={60} onClick={prevSlide}/> </div>
                    <div className="btns next"> <FcNext     size={60} onClick={nextSlide}/> </div>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>

                            {images.map((item,index) =>{
                                {/* console.log(slideIndex,index,images.length) */}
                                return(
                                    <div 
                                        className={`slide 
                                            ${slideIndex === index  ? "center" : ""}
                                            ${slideIndex >   index  ? "prev"   : ""}
                                            ${slideIndex <   index  ? "next"   : ""}
                                        `}
                                        key={index}
                                    >
                                        <Glories
                                            src={item.img}
                                            text={item.discription}
                                            label=''
                                            path='/'
                                        />
                                    </div>
                                )
                            
                            })}
                            
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Students
