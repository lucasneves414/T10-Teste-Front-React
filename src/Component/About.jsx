import React from 'react';
import props from '../Array.js'

export default function () {
    return (
        <div className="content" id="about">
            <div className="content-title-subtitle">
                {<h3>{props.SobreNos.title}</h3>}
            </div>
            <div className="content-space">
                <div className="content-image">
                    <div className="grid-sobre"></div>
                    {<img src={props.SobreNos.img.Sobre} alt="Trabalho"></img>}
                </div>
                <div className="content-title-card">
                    {<h3>{props.SobreNos.title2}</h3>}
                    {<h5>{props.SobreNos.content}</h5>}
                    {<button>{props.Home.botao}</button>}
                </div>
            </div>
        </div>
    )
}