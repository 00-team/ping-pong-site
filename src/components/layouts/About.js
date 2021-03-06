import React, { useState, useEffect } from 'react'

// redux
import { useSelector } from 'react-redux'

// locale
import locales from '../../locale.json'

// style
import './sass/about.scss'

// glories
import Glories from './Glories'

// lower imgs
import lower1 from '../../static/img/lower-1.jpg'
import lower2 from '../../static/img/lower-2.jpg'
import lower3 from '../../static/img/lower-3.jpg'
import lower4 from '../../static/img/lower-4.jpg'
import lower5 from '../../static/img/lower-5.jpg'
import lower6 from '../../static/img/lower-6.jpg'
import lower7 from '../../static/img/lower-7.jpg'
import lower8 from '../../static/img/lower-8.jpg'
import lower9 from '../../static/img/lower-9.jpg'
import lower10 from '../../static/img/lower-10.jpg'

const About = () => {
    const currentLocale = useSelector(state => state.Locale.locale)
    const [Locale, setLocale] = useState(null)

    useEffect(() => {
        // setLocale()
        locales.map(l => {
            if (l.locale === currentLocale) {
                setLocale({ ...l.text.about, direction: l.direction })
            }
        })
    }, [currentLocale])

    return (
        <div className='about'>
            <div className='cards'>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <h1
                            className='fa center'
                            id='glories'
                            style={{ textAlign: 'center' }}
                        >
                            مسابقات | مدارک
                        </h1>
                        <ul className='cards__items'>
                            <Glories
                                src={lower1}
                                alt='لیگ کشوری پینگ پنگ'
                                text=' قهرمانی لیگ کشوری، محمود ریزبند به عنوان کاپیتان تیم ، بازیکن و مربی تیم'
                                label='2005'
                                path='/'
                            />

                            <Glories
                                src={lower2}
                                alt='مربیگری پینگ پنگ'
                                text=' کلاس های مربیگری سطح یک جهان '
                                label='2001'
                                path='/'
                            />
                        </ul>
                        <ul className='cards__items' id='grid'>
                            <Glories
                                src={lower3}
                                alt='قهرمانی کشوری پینگ پنگ'
                                text=' قهرمانی نونهالان کشور، محمود ریزبد مربی تیم'
                                label='2018'
                                path='/'
                            />

                            <Glories
                                src={lower4}
                                alt='لیگ کشوری ترکیه پینگ پنگ'
                                text='شرکت در لیگ کشور ترکیه'
                                label='2018'
                                path='/'
                            />

                            <Glories
                                src={lower5}
                                alt='محمود ریزبند تیم ملی نوجوانان پینگ پنگ'
                                text='انتخابی تیم ملی نوجوانان، محمود ریزبند مربی تیم تهران'
                                label='1980'
                                path='/'
                            />

                            <Glories
                                src={lower6}
                                alt='رادین خیام محمود ریز بند پینگ پنگ'
                                text=' مقام نایب قهزمانی توسط رادین خیام یکی از شاگردان محمود ریزبند'
                                label='2015'
                                path='/'
                            />

                            <Glories
                                src={lower7}
                                alt='مربی مربیگری تیم ملی'
                                text='مربیگری تیم ملی جام فجر'
                                label='2015'
                                path='/'
                            />

                            <Glories
                                src={lower8}
                                alt='محمود ریزند پینگ پنگ استعدادیابی استعداد'
                                text='دعوت از محمود ریز بند به عنوان مسئول استعدادیابی استان تهران'
                                label='2015'
                                path='/'
                            />

                            <Glories
                                src={lower9}
                                alt='مدرک پینگ پنگ جهانی مربیگری مربی'
                                text='مدرک لول وان سطح جهانی محمود ریزبند'
                                label='2015'
                                path='/'
                            />

                            <Glories
                                src={lower10}
                                alt='رزومه پینگ پنگ فدراسیون تهران'
                                text='رزومه ورزشی محمود رضا ریزبند از طرف فدراسیون'
                                label='2015'
                                path='/'
                            />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
