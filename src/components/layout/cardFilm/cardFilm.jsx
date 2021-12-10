import React from 'react'

import './cardFilm.css'

export default function CardFilm(props) {
    return (
        <div className='cardFilm'>
            <img src={props.imgFilm} alt="Capa do filme" />
            <div className="infoFilm">
                <h2>{props.name}</h2>
                <p>{props.sinopse}</p>
            </div>
        </div>
    )
}
