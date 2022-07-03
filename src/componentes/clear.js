import React from "react";
import '../hoja-de-estilo/clear.css'

const Clear = (props) => (
    <div onClick={()=> props.manejarClear()}className='boton-clear' >
        {props.children}
    </div>
);
export default Clear;

