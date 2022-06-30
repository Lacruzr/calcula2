import React from "react";
import '../hoja-de-estilo/boton.css'

function Boton(props){
    return(
        <button className='boton'>{props.caracter}</button>
    );
};
export default Boton;