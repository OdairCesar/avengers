import React from "react"

import CardPicture from "../../layout/cardPicture/cardPicture"
import './home.css'

import img1 from '../../../assets/imgs/pictures/img1.jpg'
import img2 from '../../../assets/imgs/pictures/img2.jpg'
import img3 from '../../../assets/imgs/pictures/img3.jpg'
import img4 from '../../../assets/imgs/pictures/img4.jpg'

export default function Home(props){
    return(
        <div id="home" className='home'>
        <div className='intro'>
            <h1>Marvel Cinematic Universe</h1>
            <div className='content-intro'>
                <p>O Marvel Cinematic Universe (MCU) é uma franquia de mídia americana e um universo compartilhado centrado em uma série de filmes de super-heróis, produzida independentemente pela Marvel Studios e baseada em personagens que aparecem nas revistas em quadrinhos americanas publicadas pela Marvel Comics.</p>
                <p>A franquia tem se expandido para incluir histórias em quadrinhos, curtas-metragens, séries de televisão e séries digitais. O universo compartilhado, assim como o Universo Marvel nos quadrinhos, foi estabelecido por cruzar elementos comuns do enredo, cenários, elenco e personagens. Phil Coulson, interpretado por Clark Gregg, é um personagem original do UCM e o único personagem a aparecer em todas as diferentes mídias do UCM.</p>
            </div>
        </div>
        <div className='picture'>
            <h1>Pictures</h1>
            <div className='cardsPicture'>
                <CardPicture 
                    titulo='The Avengers' 
                    description='Nick Fury, diretor da agência de espionagem S.H.I.E.L.D., chega a um centro de pesquisa remoto durante uma evacuação. O Tesseract, uma fonte de energia de potencial desconhecido, já ativado, abriu um portal através do espaço, do qual o deus nórdico exilado Loki ressurge.' 
                    img={img4} />
                <CardPicture 
                    titulo='Avergens: Age Of Ultron' 
                    description='Tony Stark e Bruce Banner descobrem uma inteligência artificial dentro da gema do cetro e, secretamente, usam-na para concluir o programa de defesa global de Stark, denominado Ultron. Inesperadamente Ultron desperta e ao refletir sobre sua missão, ele conclui que para se alcançar a paz é necessário destruir a raça humana.' 
                    img={img3}/>
                <CardPicture 
                    titulo='Avergens: Infinity War' 
                    description='Em Vingadores: Guerra Infinita, Thanos (Josh Brolin) enfim chega à Terra, disposto a reunir as Joias do Infinito. Para enfrentá-lo, os Vingadores precisam unir forças com os Guardiões da Galáxia, ao mesmo tempo em que lidam com desavenças entre alguns de seus integrantes' 
                    img={img2}/>
                <CardPicture 
                    titulo='Avergens: Ultimate' 
                    description='Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. Com Tony Stark (Robert Downey Jr.) vagando perdido no espaço sem água nem comida, o Capitão América/Steve Rogers (Chris Evans) e a Viúva Negra/Natasha Romanov (Scarlett Johansson) precisam liderar a resistência contra o titã louco.' 
                    img={img1}/>
            </div>
        </div>
        </div>
    )
}