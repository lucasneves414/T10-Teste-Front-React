import React from 'react';
import props from '../Array.js'

export default function () {
    return (
        <div className="content" id="services">
            <div className="content-title-subtitle">
                {<h3>{props.Servicos.title}</h3>}
                {<h5>{props.Servicos.subtitle}</h5>}
            </div>
            <div className="content-space">
                <div className="content-left">
                    <div className="content-left-card">
                        <h4>{props.Servicos.contentUI.porcentage}</h4>
                        <div className="container-progress-bar">
                            <div className="progress-bar"></div>
                        </div>
                        <h3>{props.Servicos.contentUI.title}</h3>
                        <h6>{props.Servicos.contentUI.subtitle}</h6>
                    </div>
                    <div className="grid-servicos"></div>
                </div>
                <div className="content-right">
                    <div className="content-right-card">
                        {<img src={props.Servicos.content.img.Art} alt="Trabalho"></img>}
                        {<h3>{props.Servicos.content.title}</h3>}
                        <div className="grid-servicos-title">_ _ _</div>
                        {<h5>{props.Servicos.content.text}</h5>}
                        {<button>{props.Servicos.content.botao}<i className='fa fa-long-arrow-right'></i></button>}
                    </div>
                </div>
            </div>
        </div>
    )
}