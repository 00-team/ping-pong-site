import React, { useEffect, useRef, useState } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'

// types
import { CHANGE_LOCALE } from '../../database/reducers/locale/types'

// icons
import { MdGTranslate } from 'react-icons/md'
import { FiMail } from 'react-icons/fi'
import { SiInstagram, SiGmail } from 'react-icons/si'

// locales
import locales from '../../database/locale.json'

// style
import './sass/navbar.scss'

const go = path => window.open(path)

const Navbar = () => {
    const Locale = useSelector(state => state.Locale)
    const SelectRef = useRef(null)
    const dispatch = useDispatch()
    const [showMenu, setShowMenu] = useState(false)
    const [navbarData, setNavbarData] = useState({
        about: '',
        glories: '',
        students: '',
    })

    const ChangeLang = lang => {
        dispatch({ type: CHANGE_LOCALE, payload: lang })
        setShowMenu(false)
    }

    useEffect(() => {
        if (SelectRef.current) SelectRef.current.value = Locale.locale
        if (Locale) setNavbarData(Locale.localeData.text.navbar)
    }, [Locale])

    useEffect(() => {
        const HideMenu = e => {
            const tcc = e.target.classList.contains('langs')
            const tpcc = e.target.parentElement.classList.contains('langs')
            const tppcc =
                e.target.parentElement.parentElement.classList.contains('langs')
            if (!tcc && !tpcc && !tppcc) {
                setShowMenu(false)
            }
        }

        document.onmousedown = HideMenu
        return () => {
            document.onmousedown = null
        }
    }, [])

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <div className='navpart contact'>
                    <a href="mailto:dr007cc@gmail.com"><SiGmail /></a>
                    <SiInstagram onClick={e => go('https://instagram.com/i007c')} />
                </div>
                <div
                    className='navpart links'
                    style={
                        Locale ? { direction: Locale.localeData.direction } : {}
                    }
                >
                    <span>{navbarData.about}</span>
                    <span>{navbarData.glories}</span>
                    <span>{navbarData.students}</span>
                </div>
                <div className='navpart options'>
                    {Locale && (
                        <div className='langs'>
                            <MdGTranslate
                                onClick={e => setShowMenu(!showMenu)}
                            />
                            <ul className={'menu' + (showMenu ? ' show' : '')}>
                                {locales.map((lang, index) => (
                                    <li
                                        key={index}
                                        onClick={e => ChangeLang(lang.locale)}
                                    >
                                        {lang.displayName}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
