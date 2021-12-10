import React from "react"

import './header.css'

//import imgLogo from '../../../assets/imgs/logo-m.png'
import imgLogo from '../../../assets/imgs/logo.png'
import imgContact from '../../../assets/imgs/contact.png'
import Menu from "./menu/menu"

export default function Header(props){
    return(
        <nav className='cabecalho'>
            <div class='iconeLeft'>
                <img className='logo' src={imgLogo} alt='Logotipo do site'/>
            </div>

            <div className='efeito'>
                <Menu />
            </div>

            <div class='iconeRight'> 
                <img className='contact' src={imgContact} alt='Forma de contato'/>
            </div>
        </nav>
    )
}