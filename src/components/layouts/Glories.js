import React, { useState, useEffect } from 'react'

// commons
import Button from '../common/Button'

// functions
import SmoothScroll from '../functions/SmoothScroll'

// style
import './sass/glories.scss'

const qs = q => document.querySelector(q)

const GIcon = ({ type, onClick, className }) => {
    return (
        <svg
            strokeWidth='0'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className={'gicon' + (className ? ' ' + className : '')}
            onClick={e => onClick(e)}
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
    onClick: e => {},
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
    const [gindex, setGindex] = useState(0)

    const MoveSlide = direction => {
        let action
        if (direction === 'next') {
            if (gindex >= glorys.length - 1) return
            action = +1
        } else if (direction === 'previous') {
            if (gindex === 0) return
            action = -1
        } else {
            return
        }

        let ow = qs('.glory').offsetWidth
        qs('.glorys-container').style.transform = `translateX(-${
            ow * (gindex + action)
        }px)`

        setGindex(gindex + action)
    }

    useEffect(() => {
        window.onresize = () => qs('.glorys-container').style.transform = ''
        return () => {
            window.onresize = null
        }
    }, [])

    return (
        <div className='glories-container' id='glories'>
            <div className='glories'>
                <h2>Glories</h2>
                <div className='glories-slider'>
                    <GIcon
                        type='previous'
                        className={gindex === 0 ? 'disable' : ''}
                        onClick={e => MoveSlide('previous')}
                    />
                    <div className='glorys-top'>
                        <div className='glorys-container'>
                            {glorys.map((g, i) => (
                                <div key={i} className='glory'>
                                    {i}
                                </div>
                            ))}
                        </div>
                    </div>
                    <GIcon
                        type='next'
                        className={
                            gindex === glorys.length - 1 ? 'disable' : ''
                        }
                        onClick={e => MoveSlide('next')}
                    />
                </div>
                <Button
                    onClick={e =>
                        SmoothScroll(document.querySelector('#glories'))
                    }
                >
                    Students
                </Button>
            </div>
        </div>
    )
}

export default Glories
