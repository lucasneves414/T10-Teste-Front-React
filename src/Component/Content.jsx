import React from 'react';
import props from './Array.js'

console.log(props)
export default function(){
    return(
        <div>
            {<h1>{props.Home.tittle}</h1>}
            {<h1>{props.subtitulo}</h1>}
        </div>
    )
}