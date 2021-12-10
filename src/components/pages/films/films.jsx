import React from 'react'

import CardFilm from '../../layout/cardFilm/cardFilm'
import dados from './dadosFilms'

import './films.css'

export default function Films(props) {
    return (
        <div id='films' className='films'>
            <h1>Films</h1>
            <div className='listCard'>
                {dados.map( item => {
                    return(
                        <CardFilm key={item.name} imgFilm={item.img} name={item.name} sinopse={item.sinopse}/>
                    )
                })}
            </div>
        </div>
    )
}
