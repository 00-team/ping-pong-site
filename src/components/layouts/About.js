import React, { useState, useEffect } from 'react'

// redux
import { useSelector } from 'react-redux'

// locale
import locales from '../../locale.json'

// style
import './sass/about.scss'

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
        <div className='about-container'>
            <div className='about' style={Locale ? { direction: Locale.direction } : {}}>
                <div className='profile-picture'></div>
                <div className='bio'>
                {Locale && <>
                    <span>{Locale.name}</span>
                    <p>{Locale.bio}</p>
                </>}
                </div>
            </div>
        </div>
    )
}

export default About
