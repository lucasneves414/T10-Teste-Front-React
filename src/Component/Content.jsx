import React from 'react';
import props from './Array.js'

export default function () {
    return (
        <div>

            {/* HOME */}
            <div className="content">
                <div className="content-tittle-subtittle-home">
                    {<h1>{props.Home.tittle}</h1>}
                    {<h3>{props.Home.subtittle}</h3>}
                </div>
                <div className="content-image-home">
                    {<img src={props.Home.img.ImgHome} alt="Trabalho"></img>}
                </div>
                <div className="content-buttom-content-home">
                    {<button>{props.Home.botao}</button>}
                </div>
            </div>

            {/* SOBRE */}
            <div className="content">
                <div className="content-tittle-subtittle">
                    {<h3>{props.SobreNos.tittle}</h3>}
                </div>
                <div className="content-space">
                    <div className="content-image">
                        <div className="grid-sobre"></div>
                        {<img src={props.SobreNos.img.Sobre} alt="Trabalho"></img>}
                    </div>
                    <div className="content-tittle-card">
                        {<h3>{props.SobreNos.tittle2}</h3>}
                        {<h5>{props.SobreNos.content}</h5>}
                        {<button>{props.Home.botao}</button>}
                    </div>
                </div>
            </div>

            {/* SERVIÇOS */}
            <div className="content">
                <div className="content-tittle-subtittle">
                    {<h3>{props.Servicos.tittle}</h3>}
                    {<h5>{props.Servicos.subtittle}</h5>}
                </div>
                <div className="content-space">
                    <div className="content-left">
                        <div className="content-left-card">
                            <h4>{props.Servicos.contentUI.porcentage}</h4>
                            <div className="container-progress-bar">
                                <div className="progress-bar"></div>
                            </div>
                            <h3>{props.Servicos.contentUI.tittle}</h3>
                            <h6>{props.Servicos.contentUI.subtittle}</h6>
                        </div>
                        <div className="grid-servicos"></div>
                    </div>
                    <div className="content-right">
                        <div className="content-right-card">
                            {<img src={props.Servicos.content.img.Art} alt="Trabalho"></img>}
                            {<h3>{props.Servicos.content.tittle}</h3>}
                            <div className="grid-servicos-title">_ _ _</div>
                            {<h5>{props.Servicos.content.text}</h5>}
                            {<button>{props.Servicos.content.botao}<i className='fa fa-long-arrow-right'></i></button>}
                        </div>
                    </div>
                </div>
            </div>

            {/* PORTIFOLIO */}
            <div className="content">
                <div className="content-tittle-subtittle">
                    {<h3>{props.Portfolio.tittle}</h3>}
                    {<h5>{props.Portfolio.subtittle}</h5>}
                </div>
                <div className="content-space">
                    <div className="content-portifolio">
                        {<img src={props.Portfolio.images.image1.PortImg1} alt="Trabalho"></img>}
                        {<img src={props.Portfolio.images.image2.PortImg2} alt="Trabalho"></img>}
                        {<img src={props.Portfolio.images.image3.PortImg3} alt="Trabalho"></img>}
                        {<img src={props.Portfolio.images.image4.PortImg4} alt="Trabalho"></img>}
                    </div>
                </div>
            </div>

            {/* CONTATO */}
            <div className="content">
                <div className="content-tittle-subtittle">
                    {<h3>{props.Contato.tittle}</h3>}
                    {<h5>{props.Contato.subtittle}</h5>}
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

        </div>
    )
}