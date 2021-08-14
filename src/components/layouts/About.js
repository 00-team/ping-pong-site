import React, { useState, useEffect } from 'react'

// redux
import { useSelector } from 'react-redux'

// locale
import locales from '../../locale.json'

// style
import './sass/about.scss'

// glories 
import Glories from './Glories'

// imgs 
import image1 from '../../static/img/img-1.jpg'
import image2 from '../../static/img/img-2.jpg'
import image8 from '../../static/img/img-8.jpg'

import glori1 from '../../static/img/download.jpg'
import glori2 from '../../static/img/images.jpg'

const About = () => {
    const currentLocale = useSelector(state => state.Locale.locale)
    const [Locale, setLocale] = useState(null)

    useEffect(() => {
        // setLocale()
        locales.map(l => {
            if (l.locale === currentLocale) {
                setLocale({...l.text.about, direction: l.direction})
            }
        })
    }, [currentLocale])

    return (
        <>
            <div className='cards'>
                <h1 id="glories">Glories</h1>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>

                            <Glories
                            src={glori1}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Solo'
                            path='/'
                            />

                            <Glories
                            src={glori2}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Team'
                            path='/'
                            />
                                    
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
