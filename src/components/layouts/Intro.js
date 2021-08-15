import React, { useEffect, useState } from 'react'

// redux
import { useSelector, useDispatch } from 'react-redux'

// commons
import Button from '../common/Button'

// style
import './sass/intro.scss'

const Intro = () => {
    const dispatch = useDispatch()
    const Locale = useSelector(state => state.Locale.localeData)
    const [introData, setIntroData] = useState({
        name: '',
        job: '',
        button: '',
    })

    useEffect(() => {
        if (Locale) setIntroData(Locale.text.intro)
    }, [Locale])

    const ToggleLocale = () => {
        dispatch({
            type: 'CHANGE_LOCALE',
            payload: Locale.locale === 'en' ? 'fa' : 'en',
        })
    }

    return (
        <div className='intro-container'>
            <div className='intro' style={{ direction: Locale.direction }} >
                <span className='name'>{introData.name}</span>
                <span className='job'>{introData.job}</span>
                <Button onClick={e => ToggleLocale()}>
                    {introData.button}
                </Button>
            </div>
        </div>
    )
}

export default Intro
