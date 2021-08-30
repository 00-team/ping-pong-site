import React from 'react'

import { Link } from 'react-router-dom'

// icons
import { FaWhatsapp, FaInstagramSquare, FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'
import { CgMail } from 'react-icons/cg'

// css
import './sass/contact.scss'

const Contact = () => {
    return (
        <div className='contact'>
            <h1
                className='fa center'
                id='contact_us'
                style={{ textAlign: 'center' }}
            >
                تماس با ما
            </h1>

            <div className='container'>
                {/* <h2 className='fa center top' style={{ textAlign: 'center' }}>
                    راه های ارتباطی
                </h2> */}
                <div className='contact_us_card'>
                    <div className='container'>
                        <ul className='social__list'>
                            <li className='social__item'>
                                <button className='social-btn instagram'>
                                    <div className='tooltip'>
                                        @MahmodRizband
                                    </div>
                                    <a
                                        href='https://www.instagram.com/mahmoodrezarizband25/'
                                        target='_blank'
                                    >
                                        <AiOutlineInstagram className='fab' />
                                    </a>
                                </button>
                            </li>

                            <li className='social__item'>
                                <button className='social-btn telegram'>
                                    <div
                                        className='tooltip'
                                        onClick={e =>
                                            window.open(
                                                'https://t.me/9367269167'
                                            )
                                        }
                                    >
                                        09367269167
                                    </div>
                                    <FaTelegramPlane className='fab' />
                                </button>
                            </li>

                            <li className='social__item'>
                                <button
                                    className='social-btn whatsapp'
                                    onClick={e =>
                                        window.open('https://wa.me/9367269167')
                                    }
                                >
                                    <div className='tooltip'>09367269167</div>
                                    <FaWhatsapp className='fab' />
                                </button>
                            </li>

                            <li className='social__item'>
                                <button className='social-btn gmail'>
                                    <div className='tooltip'>
                                        MahmodRizband@gmail.com
                                    </div>
                                    <CgMail className='fab' />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
