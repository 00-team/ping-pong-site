import React, { useState, useEffect } from 'react'

// commons
import Button from '../common/Button'
import SlideShow from '../common/SlideShow'

// functions
import SmoothScroll from '../functions/SmoothScroll'

// style
import './sass/glories.scss'

const qs = q => document.querySelector(q)

const GIcon = ({ type }) => {
    return (
        <svg
            strokeWidth='0'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className={'gicon'}
            style={ type === 'next' ? {marginLeft: '50px'} : {marginRight: '50px'}}
        >
            <polyline
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                points='7 2 17 12 7 22'
                transform={type === 'previous' ? 'matrix(-1 0 0 1 24 0)' : ''}
            ></polyline>
        </svg>
    )
}

GIcon.defaultProps = {
    type: '',
}

const Glories = () => {
    const glorys = [
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg',
            title: 'World 1 Championships',
            description:
                'World Championships World Championships World ChampionshipsWorld Championships  World Championships',
            rank: 1, // 1 or 2 or 3
        },
        {
            img: 'http://irttf.ir/wp-content/uploads/2021/07/IMG_3403-1100x700.jpg',
            title: 'World 2 2 Championships',
            description:
                'World Championships World Championships World ChampionshipsWorld Championships  World Championships',
            rank: 3, // 1 or 2 or 3
        },
        {
            img: 'https://cdn.discordapp.com/attachments/745708329019375697/876163293117571142/WhatsApp_Image_2021-08-14_at_9.56.25_PM_1.jpeg',
            title: 'World 3 Championships',
            description:
                'World Championships World Championships World ChampionshipsWorld Championships  World Championships',
            rank: 2, // 1 or 2 or 3
        },
        {
            img: 'https://cdn.discordapp.com/attachments/745708329019375697/876163255024885810/WhatsApp_Image_2021-08-14_at_9.56.25_PM.jpeg',
            title: 'World 4 Championships',
            description:
                'World Championships World Championships World ChampionshipsWorld Championships  World Championships',
            rank: 7, // 1 or 2 or 3
        },
    ]

    return (
        <div className='glories-container' id='glories'>
            <div className='glories'>
                <h2>Glories</h2>
                <div className='glories-slider'>
                    <SlideShow
                        NextIcon={<GIcon type='next' />}
                        PreviousIcon={<GIcon type='previous' />}
                    >
                        {glorys.map((g, i) => (
                            <div key={i} className='glory'>
                                {i}
                            </div>
                        ))}
                    </SlideShow>
                </div>
                <Button
                    onClick={e =>
                        SmoothScroll(qs('#glories'))
                    }
                >
                    Students
                </Button>
            </div>
        </div>
    )
}

export default Glories
