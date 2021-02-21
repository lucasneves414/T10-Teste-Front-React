import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Menu from './Component/Menu.jsx';
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Service from "./Component/Service.jsx";
import Portfolio from "./Component/Portfolio.jsx";
import Contact from "./Component/Contact.jsx";

ReactDOM.render(
    <>
        <Menu></Menu>,
        <Home></Home>
        <About></About>
        <Service></Service>
        <Portfolio></Portfolio>
        <Contact></Contact>
    </>,
    document.getElementById('root')
)