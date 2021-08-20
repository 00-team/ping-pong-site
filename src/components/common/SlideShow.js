import React, { useState, useEffect, useRef } from 'react'

// style
import './sass/slide-show.scss'

const qs = q => document.querySelector(q)

const SlideShow = ({ children, NextIcon, PreviousIcon }) => {
    const [slides, setSlides] = useState({ length: 0, index: 0 })
    const slidesContainer = useRef(null)

    useEffect(() => {
        if (children) setSlides({ ...slides, length: children.length })
    }, [children])

    useEffect(() => {
        let sliderObserver = new ResizeObserver(e => {
            let sindex = slidesContainer.current.getAttribute('data-index')
            let ow = slidesContainer.current.querySelector('.slide').offsetWidth
            slidesContainer.current.style.transform = `translateX(-${
                ow * sindex
            }px)`
        })
        if (slidesContainer.current) {
            sliderObserver.observe(slidesContainer.current)
        }
        return () => {
            sliderObserver.disconnect()
        }
    }, [slidesContainer])

    const MoveSlide = direction => {
        let action
        if (direction === 'next') {
            if (slides.index >= slides.length - 1) return
            action = +1
        } else if (direction === 'previous') {
            if (slides.index === 0) return
            action = -1
        } else return

        let ow = slidesContainer.current.querySelector('.slide').offsetWidth

        if (slidesContainer.current) {
            slidesContainer.current.style.transform = `translateX(-${
                ow * (slides.index + action)
            }px)`
        }

        setSlides({ ...slides, index: slides.index + action })
    }

    return (
        <div className='slider-container'>
            <div
                className={
                    'icon-container previous-icon' +
                    (slides.index === 0 ? ' disable' : '')
                }
                onClick={e => MoveSlide('previous')}
            >
                {PreviousIcon}
            </div>
            <div className='sliders-container'>
                <div
                    className='slides-container'
                    ref={slidesContainer}
                    data-index={slides.index}
                >
                    {children &&
                        children.map((slide, index) => (
                            <div key={index} className='slide'>
                                {slide}
                            </div>
                        ))}
                </div>
            </div>
            <div
                className={
                    'icon-container next-icon' +
                    (slides.index >= slides.length - 1 ? ' disable' : '')
                }
                onClick={e => MoveSlide('next')}
            >
                {NextIcon}
            </div>
        </div>
    )
}

SlideShow.defaultProps = {
    children: '',
    NextIcon: null,
    PreviousIcon: null,
}

export default SlideShow
