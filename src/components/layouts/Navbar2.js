import React from 'react'

// icons 
import { BiHomeAlt } from 'react-icons/bi'
import { GiPingPongBat } from 'react-icons/gi'
import { TiHome } from 'react-icons/ti'

import './sass/navbar2.scss'

const Navbar2 = () => {
    return (
        <div className='navbar'>
            <div className='container'>
                <input type='radio' name='s' id='home' defaultChecked />
                <input type='radio' name='s' id='glories' />
                <input type='radio' name='s' id='contact_us' />
                <input type='radio' name='s' id='help' />
                <input type='radio' name='s' id='about' />
                <nav>
                    <div className='slider'></div>
                    <label className='home fa' htmlFor='home'>
                        خانه <TiHome size={20} />
                    </label>
                    <label className='glories center' htmlFor='glories'>
                        افتخارات
                    </label>
                    <label
                        className='ccontact_usode center'
                        htmlFor='contact_us'
                    >
                        ارتباط با ما
                    </label>
                </nav>
            </div>
        </div>
    )
}

export default Navbar2;
