import React from "react";
import '../hoja-de-estilo/boton.css';

function Boton(props){

    const esOperador = valor =>  {
        return isNaN(valor) && (valor !='.') && (valor != '=');
    };

    return(
        <div className={`boton ${esOperador(props.children) ? 'operador' : '' } `.trimEnd()}
        onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    )
};
export default Boton;