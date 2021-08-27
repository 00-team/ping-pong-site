import React, { useState, useRef, useEffect } from 'react'

// icons
import { FcPrevious, FcNext } from 'react-icons/fc'

// styling
import './scss/studentslider.scss'

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
    {
        img: 'https://cdn.discordapp.com/attachments/731174051170746500/840946150852001792/zz.png',
        discription: 'شقایق شهریاری نایب قهرمان لیگ بزرگسالان',
        id: 4,
    },
    {
        img: 'https://cdn.discordapp.com/attachments/731174051170746500/772103695013249094/hmm1.png',
        discription: 'شقایق شهریاری نایب قهرمان لیگ بزرگسالان',
        id: 5,
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

    return (
        <div className='slider'>
            <div className='btns prev'>
                <FcPrevious size={60} onClick={prevSlide} />
            </div>
            <div className='btns next'>
                <FcNext size={60} onClick={nextSlide} />
            </div>
            <div className='container'>
                {images.map((obj, index) => {
                    return (
                        <div
                            className={'card-slide' + getYourClass(index)}
                            key={index}
                            onClick={() => setSlideIndex(index)}
                        >
                            <div className='overlay'></div>
                            <div className={'card'}>
                                <img className='img' src={obj.img} alt='' />
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
