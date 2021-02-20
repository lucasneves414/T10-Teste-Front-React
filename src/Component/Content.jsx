import React from 'react';
import props from './Array.js'

export default function () {
    return (
        <div>
            <div className="content">
                <div className="content-tittle-subtittle">
                    {<h1>{props.Home.tittle}</h1>}
                    {<h3>{props.Home.subtittle}</h3>}
                </div>
                <div className="content-image">
                    {<img src={props.Home.img.ImgHome} alt="Trabalho"></img>}
                </div>
                <div className="content-buttom-content">
                    {<button>{props.Home.botao}</button>}
                </div>
            </div>

           
        </div>
    )
}