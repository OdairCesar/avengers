import React from "react"

import './cardGallery.css'

export default function CardGallery(props){

    return(
        <div className='contCardGal'>
            <div className='cardGallery'>
                <img src={props.file} alt={props.description} />
            </div>
        </div>
    )
}