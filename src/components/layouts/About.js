import React, { useEffect, useRef, useState } from 'react'

// redux
import { useSelector } from 'react-redux'

// functions
import SmoothScroll from '../functions/SmothScroll'

// style
import './sass/about.scss'

const About = () => {
    const pictures = useRef(null)
    const [picturesScroll, setPicturesScroll] = useState({
        scrolling: true,
        scrollDirection: +1,
    })
    const Locale = useSelector(state => state.Locale.localeData)
    const [aboutData, setAboutData] = useState({
        title: '',
        bio: '',
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
        if (!pictures.current) return

        var ScrollInterval

        const ScrollAnimimation = e => {
            if (e.offsetHeight + e.scrollTop >= e.scrollHeight) {
                setPicturesScroll({ ...picturesScroll, scrollDirection: -1 })
            } else if (e.scrollTop === 0) {
                setPicturesScroll({ ...picturesScroll, scrollDirection: +1 })
            }

            e.scroll({ top: e.scrollTop + picturesScroll.scrollDirection })
        }

        if (picturesScroll.scrolling) {
            ScrollInterval = setInterval(
                ScrollAnimimation,
                50,
                pictures.current
            )
        } else {
            clearInterval(ScrollInterval)
        }

        return () => {
            clearInterval(ScrollInterval)
        }
    }, [pictures, picturesScroll])

    return (
        <div className='about-container' id='about'>
            <div className='about'>
                <div
                    className='pictures'
                    ref={pictures}
                    onMouseEnter={e =>
                        setPicturesScroll({
                            ...picturesScroll,
                            scrolling: false,
                        })
                    }
                    onMouseLeave={e =>
                        setPicturesScroll({
                            ...picturesScroll,
                            scrolling: true,
                        })
                    }
                >
                    {pics.map((pic, index) => (
                        <div
                            key={index}
                            style={{
                                ...(index % 2 === 1
                                    ? { marginLeft: '250px' }
                                    : {}),
                                backgroundImage: `url(${pic})`,
                            }}
                            className='pic'
                        ></div>
                    ))}
                </div>
                <div className='bio' style={{ direction: Locale.direction }}>
                    <h2>{aboutData.title}</h2>
                    <p>{aboutData.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default About
