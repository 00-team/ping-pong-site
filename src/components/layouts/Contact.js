import React from 'react'

import { Link } from 'react-router-dom'

// icons
import { FaWhatsapp, FaInstagramSquare, FaTelegramPlane } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
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
                                        @mahmoodrezarizband25
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
                                                'https://t.me/mahmoud_rizband'
                                            )
                                        }
                                    >
                                        @mahmoud_rizband
                                    </div>
                                    <FaTelegramPlane className='fab' />
                                </button>
                            </li>

                            <li className='social__item'>
                                <button className='social-btn phone'>
                                    <div className='tooltip'>09387269167</div>
                                    <BiPhoneCall className='fab' />
                                </button>
                            </li>

                            <li className='social__item'>
                                <button className='social-btn whatsapp'>
                                    <div className='tooltip'>09387269167</div>
                                    <FaWhatsapp className='fab' />
                                </button>
                            </li>

                            {/* <li className='social__item'>
                                <button className='social-btn gmail'>
                                    <div className='tooltip'>
                                        mahmoodrizband@gmail.com
                                    </div>
                                    <a
                                        href='mailto:mahmodrizband@gmail.com'
                                        target='_blank'
                                    ></a>
                                    <CgMail className='fab' />
                                </button>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
