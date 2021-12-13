import React from "react"

import CardGallery from "../../layout/cardGallery/cardGallery"

import './gallery.css'
import imgs from './imagens'

export default function Gallery(props){
    return(
        <div id='gallery' className='gallery'>
            <h1>Gallery</h1>
            <div className='imagens'>
                {imgs.map( img =>{
                    return(
                        <CardGallery key={img.imagem} file={img.imagem} description={img.description} />
                    )
                })}
            </div>
        </div>
    )
}