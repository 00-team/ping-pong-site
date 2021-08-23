import React, { useState, useEffect } from 'react'

// commons
import Button from '../common/Button'
import SlideShow from '../common/SlideShow'

// redux
import { useSelector } from 'react-redux'

// icons
import Medal from '../common/Medal'

// functions
import SmoothScroll from '../functions/SmoothScroll'

// style
import './sass/glories.scss'

// images
import g1 from '../../static/img/glories/g-1.jpg'
import g2 from '../../static/img/glories/g-2.jpg'
import g3 from '../../static/img/glories/g-3.jpg'
import g4 from '../../static/img/glories/g-4.jpg'
import g5 from '../../static/img/glories/g-5.jpg'
import g6 from '../../static/img/glories/g-6.jpg'

const qs = q => document.querySelector(q)

const GIcon = ({ type }) => {
    const WindowSize = useSelector(state => state.Base.windowWidth)
    let cstyle = {}

    if (type === 'next') {
        if (WindowSize > 1300) {
            cstyle = { marginLeft: '50px' }
        }
        if (WindowSize < 1200) {
            cstyle = { position: 'absolute', right: '10px' }
        }
        if (WindowSize < 600) {
            cstyle = { position: 'absolute', right: 0 }
        }
    } else {
        if (WindowSize > 1300) {
            cstyle = { marginRight: '50px' }
        }
        if (WindowSize < 1200) {
            cstyle = { position: 'absolute', left: '10px' }
        }
        if (WindowSize < 600) {
            cstyle = { position: 'absolute', left: 0 }
        }
    }
    return (
        <svg
            strokeWidth='0'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className={'gicon'}
            style={cstyle}
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
    const WindowSize = useSelector(state => state.Base.windowWidth)

    const [glorys, setGlorys] = useState([
        {
            id: 1,
            img: g1,
            rank: 1,
        },
        {
            id: 2,
            img: g2,
            rank: 1,
        },
        {
            id: 3,
            img: g3,
            rank: 1,
        },
        {
            id: 4,
            img: g4,
            rank: 4,
        },
        {
            id: 5,
            img: g5,
            rank: 4,
        },
        {
            id: 6,
            img: g6,
            rank: 2,
        },
    ])

    const Locale = useSelector(state => state.Locale.localeData)
    const [gloriesData, setGloriesData] = useState({
        title: '',
        button: '',
    })

    useEffect(() => {
        if (Locale) {
            setGloriesData(Locale.text.glories)
            if (
                typeof Locale.text.glories.glorys === 'object' &&
                Locale.text.glories.glorys
            ) {
                let Glor = []
                Locale.text.glories.glorys.forEach(g => {
                    let gf = glorys.find(i => i.id === g.id)
                    if (gf) Glor.push({ ...gf, ...g })
                })
                setGlorys(Glor)
            }
        }
    }, [Locale])

    return (
        <div className='glories-container' id='glories'>
            <div className='glories'>
                <h2 style={{ direction: Locale.direction }}>
                    {gloriesData.title}
                </h2>
                <div className='glories-slider'>
                    <SlideShow
                        NextIcon={<GIcon type='next' />}
                        PreviousIcon={<GIcon type='previous' />}
                    >
                        {glorys.map((g, i) => (
                            <div key={i} className='glory'>
                                <div
                                    className='picture'
                                    style={{ backgroundImage: `url(${g.img})` }}
                                ></div>
                                <div
                                    className='details'
                                    style={{ direction: Locale.direction }}
                                >
                                    {WindowSize < 800 ? (
                                        <div className='top-details'>
                                            <div className='medal'>
                                                <Medal rank={g.rank} />
                                            </div>
                                            <span className='title'>
                                                {g.title}
                                            </span>
                                        </div>
                                    ) : (
                                        <>
                                            <div className='medal'>
                                                <Medal rank={g.rank} />
                                            </div>
                                            <span className='title'>
                                                {g.title}
                                            </span>
                                        </>
                                    )}
                                    <span className='description'>
                                        {g.description}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </SlideShow>
                </div>
                <Button onClick={e => SmoothScroll(qs('#students'))}>
                    {gloriesData.button}
                </Button>
            </div>
        </div>
    )
}

export default Glories
