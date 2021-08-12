import React, { useState, useEffect } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'

// locale
import locale from '../../locale.json'


const Navbar = () => {
    const currentLocale = useSelector(state => state.Locale.locale)
    const [Locale, setLocale] = useState(null)

    useEffect(() => {
        locale.forEach(l => {
            if (l.locale === currentLocale) {
                setLocale(l.text.navbar)
            }
        })
    }, [currentLocale])

    if (!Locale) return <></>

    return (
        <nav>
            <span>{Locale.about} </span>
            <span>{Locale.awards} </span>
            <span>{Locale.contact} </span>
        </nav>
    )
}

export default Navbar
