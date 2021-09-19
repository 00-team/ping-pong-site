import React from 'react'
import { Link } from 'react-router-dom'

const Glories = ({ label, src, text,alt }) => {
    return (
        <>
            <li className='cards__item'>
                <div className='cards__item__link'>
                    <figure
                        className='cards__item__pic-wrap'
                        data-category={label}
                    >
                        <img
                            className='cards__item__img'
                            src={src}
                            alt={alt}
                        />
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className='cards__item__text fa'>{text}</h5>
                    </div>
                </div>
            </li>
        </>
    )
}

export default Glories
