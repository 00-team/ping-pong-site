import React from 'react'

// video
import video from '../../static/vid/hero.mp4'

// elements
import { Button } from '../elements/Button'

// css
import '../css/herosection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video className='hero' src={video} autoPlay loop muted />
            <h1></h1>
            <p className='fa center first'>مسابقات جهانی بلاروس</p>
            <p className='fa center'>2016 </p>
            <div className='hero-btns'>
                <Button
                    link='#contact_us'
                    className='btns fa center'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    تماس با ما
                </Button>

                <Button
                    link='#students'
                    className='btns fa center'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    شاگردان
                </Button>

                <Button
                    link='#bio'
                    className='btns fa center'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    معرفی
                </Button>
            </div>
        </div>
    )
}

export default HeroSection
