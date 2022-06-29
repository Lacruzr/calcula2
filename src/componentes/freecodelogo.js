import React from 'react';
import logo from '../imagenes/FreeCodeCamp_logo.png';
function FreeCodeLogo () {
    return(
        <div className='logoCont'>
            <img className='logo' src= {logo} />
        </div>
    );
};
export default FreeCodeLogo;