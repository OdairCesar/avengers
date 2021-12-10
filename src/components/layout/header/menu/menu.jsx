import React from "react"
import { Link } from "react-router-dom"

import './menu.css'

export default function Menu(props){
    return(
        <ul className='menu'>
            <Link to="/"><li>Home</li></Link>
            <Link to="/gallery"><li>Gallery</li></Link>
            <Link to="/films"><li>Films</li></Link>
            <Link to="/about"><li>About</li></Link>
        </ul>
    )
}