import React, { useState, useRef, useEffect } from 'react'

// icons
import { FcPrevious, FcNext } from 'react-icons/fc'

// styling
import './scss/studentslider.scss'

//imgs
import radin from '../../static/students/radin.jpg'
import nilia from '../../static/students/nilia.jpg'
import shaghayegh from '../../static/students/shaghayegh.jpg'
import parsa from '../../static/students/parsa.jpg'
import mahan from '../../static/students/mahan.jpg'
import samadi from '../../static/students/samadi.jpg'

const images = [
    {
        img: radin,
        discription: ' رادین خیام قهرمان کشور و دارنده رنکینگ جهانی',
        alt: ' رادین خیام قهرمان پینگ پنگ رنک مقام کشوری مسابقات',
        id: 1,
    },
    {
        img: nilia,
        discription: 'نیلیا نقیبی دارنده مقام اول در مسابقات کشوری',
        alt: 'نیلیا نقیبی مسابقات کشوری پینگ پنگ مقام',
        id: 2,
    },
    {
        img: shaghayegh,
        discription: 'شقایق شهریاری نایب قهرمان لیگ بزرگسالان',
        alt: 'پینگ پنگ بزرگسالان',
        id: 3,
    },
    {
        img: parsa,
        discription:
            'پارسا خلیلی قهرمان نونهالان کشور و دارنده مقام در نوجوانان و جوانان ',
        alt: 'پارسا خلیلی پینگ پنگ',
        id: 3,
    },
    {
        img: mahan,
        discription: 'ماهان ترک زبان مقام دار استان تهران',
        alt: 'پینگ پنگ تهران مقام',
        id: 3,
    },
    {
        img: samadi,
        discription: 'محمد امین صمدی قهرمان نونهالان،نوجونان و جوانان کشور',
        alt: 'صمدی قهرمان نونهالان نوجوانان جوانان پینگ پنگ',
        id: 3,
    },
]

function StudentSlider() {
    const [slideIndex, setSlideIndex] = useState(1)

    const nextSlide = () => {
        if (slideIndex === images.length - 1) {
            setSlideIndex(0)
        } else {
            setSlideIndex(slideIndex + 1)
        }
    }

    const prevSlide = () => {
        if (slideIndex === 0) {
            setSlideIndex(images.length - 1)
        } else {
            setSlideIndex(slideIndex - 1)
        }
    }

    const getYourClass = index => {
        if (index === slideIndex) return ' current'
        else if (
            index === slideIndex + 1 ||
            (slideIndex === images.length - 1 && index === 0)
        )
            return ' next'
        else if (
            index === slideIndex - 1 ||
            (slideIndex === 0 && index === images.length - 1)
        )
            return ' previous'
        else return ''
    }

    // const interval = setInterval(() => {
    //     nextSlide();
    // }, 2000);

    return (
        <div className='slider'>
            <div className='container'>
                <div className='btns'>
                    <div className='next'>
                        <FcPrevious size={60} onClick={prevSlide} />
                    </div>
                    <div className='prev'>
                        <FcNext size={60} onClick={nextSlide} />
                    </div>
                </div>
                {/* <div className='btns prev'>
                    <FcPrevious size={60} onClick={prevSlide} />
                </div>
                <div className='btns next'>
                    <FcNext size={60} onClick={nextSlide} />
                </div> */}
                {images.map((obj, index) => {
                    return (
                        <div
                            className={'card-slide' + getYourClass(index)}
                            key={index}
                            onClick={() => setSlideIndex(index)}
                        >
                            <div className='overlay'></div>
                            <div className={'card'}>
                                <img
                                    className='img'
                                    src={obj.img}
                                    alt={obj.alt}
                                />
                                <div className='discription fa'>
                                    <h5>{obj.discription}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default StudentSlider
