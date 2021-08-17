import React from "react"

// button element 
import { Button } from "../elements/Button"

import "../css/herosection.css"




function HeroSection() {
    return (
        <div className='hero-container'>
            <video
                className="hero"
                src='https://cdn.discordapp.com/attachments/780443920571432970/876838241884573726/WhatsApp_Video_2021-08-16_at_11.58.35_AM.mp4'
                autoPlay
                loop
                muted
            />
            <h1></h1>
            <p className='fa center'>محمود ریزبند</p>
            <p className='fa center'>مسابقات جهانی بلاروس</p>
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
                    link='#'
                    className='btns fa center'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    شاگردان محمود ریزبند
                </Button>

                <Button
                    link='#glories'
                    className='btns fa center'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    افتخارات
                </Button>

            </div>
        </div>
    )
}

export default HeroSection
