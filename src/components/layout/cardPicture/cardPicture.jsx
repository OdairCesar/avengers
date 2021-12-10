import React from "react"

import './cardPicture.css'

export default function CardPicture(props){
    return(
        <div className='cardPicture'>
            <img src={props.img} alt='Imagem' />
            <div className='oculto'>
                <h2>{props.titulo}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    )
}