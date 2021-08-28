import React from 'react'

import { Link } from 'react-router-dom';
// icons 

import { FaGithubSquare, FaTelegram } from "react-icons/fa";


// css 
import "../css/footer.css";

function Footer() {
    return (
        <div>
            <div className='footer-container' id='contact_us'>
                <section className='social-media'>
                    <div className='social-media-wrap'>
                        <div className='footer-logo'>
                            <Link to='/' className='social-logo'>
                                Created By : 00 Team
                                <i className='fab fa-typo3' />
                            </Link>
                        </div>
                        <small className='website-rights'>© 2021</small>
                        <div className='team' id='team'>
                            <a
                                className='social-icon-link facebook'
                                href='https://github.com/00-team'
                                target='_blank'
                                aria-label=''
                            >
                                <FaGithubSquare />
                            </a>
                            <Link
                                className='social-icon-link instagram'
                                to='/'
                                target='_blank'
                                aria-label='Instagram'
                            >
                                <i className='fab fa-instagram' />
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer
