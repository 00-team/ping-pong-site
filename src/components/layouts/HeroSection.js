import React,{useEffect, useRef} from 'react'

// video
import video from '../../static/vid/hero.mp4'

// hero img 
import hero_img from '../../static/img/hero.jpg'

// elements
import { Button } from '../elements/Button'

// css
import '../css/herosection.css'

function HeroSection() {
    const videoRef = useRef(null)

    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

    useEffect(() => {
        onLoad();
    }, [])

    const onLoad = () =>{
        videoRef.current.play()
    }

    return (
        <div className={`hero-container ${isSafari ? 'img' : ''}`}>
            <video className='hero' ref={videoRef} src={video} loop muted />
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
