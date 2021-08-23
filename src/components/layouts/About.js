import React, { useEffect, useRef, useState } from 'react'

// redux
import { useSelector } from 'react-redux'

// functions
import SmoothScroll from '../functions/SmoothScroll'
import AutoScroll from '../functions/AutoScroll'

// commons
import Button from '../common/Button'

// style
import './sass/about.scss'

// images
import Profile from '../../static/img/about/Profile.jpg'
import Profile1 from '../../static/img/about/Profile-1.jpg'
import Profile2 from '../../static/img/about/Profile-2.jpg'
import Profile3 from '../../static/img/about/Profile-3.jpg'

const About = () => {
    const pictures = useRef(null)
    const [scrolling, setScrolling] = useState(true)
    const Locale = useSelector(state => state.Locale.localeData)
    const WindowSize = useSelector(state => state.Base.windowWidth)
    const [aboutData, setAboutData] = useState({
        title: '',
        bio: '',
        slogan: '',
        button: '',
    })

    useEffect(() => {
        if (Locale) setAboutData(Locale.text.about)
    }, [Locale])

    const pics = [
        Profile,
        Profile1,
        Profile2,
        Profile3,
    ]

    useEffect(() => {
        let ScrollInterval

        if (pictures.current && scrolling) {
            ScrollInterval = AutoScroll(pictures.current, 'top')
        } else {
            clearInterval(ScrollInterval)
        }

        return () => {
            clearInterval(ScrollInterval)
        }
    }, [pictures, scrolling])

    return (
        <div className='about-container' id='about'>
            <div className='about'>
                <div
                    className='pictures'
                    ref={pictures}
                    onMouseEnter={e => setScrolling(false)}
                    onMouseLeave={e => setScrolling(true)}
                >
                    {pics.map((pic, index) => (
                        <div
                            key={index}
                            style={{
                                ...(index % 2 === 1
                                    ? {
                                          marginLeft:
                                              WindowSize < 1100
                                                  ? WindowSize < 500
                                                      ? '110px'
                                                      : '200px'
                                                  : '250px',
                                      }
                                    : {}),
                                backgroundImage: `url(${pic})`,
                            }}
                            className='pic'
                        ></div>
                    ))}
                </div>

                <div className='bio' style={{ direction: Locale.direction }}>
                    <h2>{aboutData.title}</h2>
                    <div className='bottom-layer'>
                        <p>{aboutData.bio.split('*').map((g, index) => <span key={index} >{g}<br /></span>)}</p>

                        <div className='bottom-container'>
                            <span>{aboutData.slogan}</span>
                            <Button
                                onClick={e =>
                                    SmoothScroll(
                                        document.querySelector('#glories')
                                    )
                                }
                            >
                                {aboutData.button}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
