import React from 'react';
import Logo from '../assets/logo.jpg';

export default function () {

    return (
        <div className="menu-div">
            <img src={Logo} alt="Logo da Empresa"/>
            
            <nav>
                <ul>
                    <li>
                        <label><a href="#home">Home</a></label>
                    </li>
                    <li>
                        <label> <a href="#about">Sobre nós</a></label>
                    </li>
                    <li>

                        <label><a href="#services">Serviços</a></label>
                    </li>
                    <li>

                        <label><a href="#portifolio">Portifolio</a></label>
                    </li>
                    <li>

                        <label><a href="#contact">Contato</a></label>
                    </li>
                </ul>
            </nav>
        </div>
    )
}