import React from 'react';
import props from '../Array.js'

export default function () {
    return (
        <div className="content" id="contact">
            <div className="content-title-subtitle">
                {<h3>{props.Contato.title}</h3>}
                {<h5>{props.Contato.subtitle}</h5>}
            </div>
            <div className="content-space">
                <div className="content-contact">
                    {<input type="text" placeholder="Nome"></input>}
                    <div>
                        {<input type="text" placeholder="Telefone"></input>}
                        {<input type="text" placeholder="E-mail"></input>}
                    </div>
                    {<input className="contact-message-input" type="text" placeholder="Mensagem"></input>}
                    <div className="content-buttom-contact">
                        {<button className="buttom-contact">{props.Contato.botao}</button>}
                    </div>
                    <div className="grid-contato"></div>
                </div>
            </div>
        </div>
    )
}