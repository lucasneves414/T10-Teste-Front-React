import React from 'react';
import Logo from '../assets/logo.jpg';

console.log(Logo)
export default function () {

    return (
        <div className="menu-div">
            <img src={Logo} alt="Logo da Empresa"/>
            
            <nav>
                <ul>
                    <li>
                        <label>Home</label>
                    </li>
                    <li>
                        <label>Sobre nós</label>
                    </li>
                    <li>

                        <label>Serviços</label>
                    </li>
                    <li>

                        <label>Portifolio</label>
                    </li>
                    <li>

                        <label>Contato</label>
                    </li>
                </ul>
            </nav>
        </div>
    )
}