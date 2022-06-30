import logo from './logo.svg';
import './App.css';
import FreeCodeLogo from './componentes/freecodelogo.js';
import Boton from './componentes/boton.js';

function App() {
  return (
    <div className="App">
      <FreeCodeLogo />
      <div className='teclado'>
        <div className='fila'>
          <Boton caracter = '7' />
          <Boton caracter = '8' />
          <Boton caracter = '9' />
          <Boton caracter = '+' />
        </div>
        <div className='fila'>
          <Boton caracter = '4' />
          <Boton caracter = '5' />
          <Boton caracter = '6' />
          <Boton caracter = '-' />
        </div>
        <div className='fila'>
          <Boton caracter = '1' />
          <Boton caracter = '2' />
          <Boton caracter = '3' />
          <Boton caracter = '*' />
        </div>
        <div className='fila'>
          <Boton caracter = '0' />
          <Boton caracter = '.' />
          <Boton caracter = '=' />
          <Boton caracter = '/' />
        </div>
        <div className='fila'>
          <Boton caracter = '7' />
          <Boton caracter = '8' />
          <Boton caracter = '9' />
          <Boton caracter = '+' />
        </div>
      </div>
    </div>
  );
}

export default App;
