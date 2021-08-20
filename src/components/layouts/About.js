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
        'https://cdn.discordapp.com/attachments/731174051170746500/825911332176003112/bg.png',
        'https://cdn.discordapp.com/attachments/731174051170746500/808355617441710130/mars-planet-vector-13949696.jpg',
        'https://cdn.discordapp.com/attachments/731174051170746500/742433176260968498/logo-kepler.png',
        'https://cdn.discordapp.com/attachments/731174051170746500/734284348567846952/wp3025611.jpg',
        'https://cdn.discordapp.com/attachments/731174051170746500/732383227909767218/gta-v-galle.png',
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
