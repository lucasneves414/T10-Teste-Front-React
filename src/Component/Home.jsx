import React from 'react';
import props from '../Array.js'

export default function () {
    return (
        <div className="content" id="home">
            <div className="content-title-subtitle-home">
                {<h1>{props.Home.title}<strong>{props.Home.titleexperiencia}</strong></h1>}
                {<h3>{props.Home.subtitle}</h3>}
            </div>
            <div className="content-image-home">
                {<img src={props.Home.img.ImgHome} alt="Trabalho"></img>}
            </div>
            <div className="content-buttom-content-home">
                {<button>{props.Home.botao}</button>}
            </div>
        </div>
    )
}