import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Pantalla  from './componentes/pantalla';
import FreeCodeLogo from './componentes/freecodelogo.js';
import Boton from './componentes/boton.js';
import Clear from './componentes/clear.js';
import {evaluate} from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const actualizaInput = val =>{
      setInput(input + val)
  };

  const calcular = () => {

      setInput(evaluate(input))
  };

  return (
    <div className="App">
      <FreeCodeLogo />
      <div className='teclado'>
        <Pantalla input = {input}/>
        <div className='fila'>
          <Boton manejarClic={actualizaInput} >7</Boton>
          <Boton manejarClic={actualizaInput}>8</Boton>
          <Boton manejarClic={actualizaInput}>9</Boton>
          <Boton manejarClic={actualizaInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={actualizaInput} >4</Boton>
          <Boton manejarClic={actualizaInput} >5</Boton>
          <Boton manejarClic={actualizaInput} >6</Boton>
          <Boton manejarClic={actualizaInput} >-</Boton> 
        </div>
        <div className='fila'>
          <Boton manejarClic={actualizaInput} >1</Boton>
          <Boton manejarClic={actualizaInput} >2</Boton>
          <Boton manejarClic={actualizaInput} >3</Boton>
          <Boton manejarClic={actualizaInput} >*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcular} >=</Boton>
          <Boton manejarClic={actualizaInput} >0</Boton>
          <Boton manejarClic={actualizaInput} >.</Boton>
          <Boton manejarClic={actualizaInput} >/</Boton>
        </div>
        
        <div className='fila'>
          <Clear manejarClear={() => setInput('')}>Limpiar Pantalla</Clear>
        </div>

      </div>

    </div>
  );
}

export default App;
