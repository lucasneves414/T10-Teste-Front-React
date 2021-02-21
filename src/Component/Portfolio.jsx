import React from 'react';
import props from '../Array.js'

export default function () {
    return (
        <div className="content" id="portifolio">
            <div className="content-title-subtitle">
                {<h3>{props.Portfolio.title}</h3>}
                {<h5>{props.Portfolio.subtitle}</h5>}
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
    )
}