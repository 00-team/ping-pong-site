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
                            <div className='social-logo'>
                                <div> Created By :</div>
                                <div className='team_00'> 00 Team </div>
                            </div>
                        </div>
                        <div className='website-rights'>© 2021</div>
                        <div className='team' id='team'>
                            <a
                                className='social-icon-link facebook'
                                href='https://github.com/00-team'
                                target='_blank'
                                aria-label=''
                            >
                                <FaGithubSquare />
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer
