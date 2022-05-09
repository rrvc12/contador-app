import './App.css';
import logo from './images/click.png';
import Boton from './components/Boton.js';
import Contador from './components/Contador.js';
import { useState } from 'react';

function App() {
  
  const [numeroClics, setNumeroClics] = useState(0);

  const manejarClic = () => {
    setNumeroClics(numeroClics+1);
  }

  const reiniciarContador = () => {
    setNumeroClics(0);
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img className='logo-imagen' src={logo} alt='Logo de la Página'/>
        <h1 className='logo-nombre'>Contador de Clics</h1>
      </div>
      <div className='contenedor-principal'>
      <Contador numeroClics={numeroClics}/>
      <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic}/>
      <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador}/>
      </div>
      
    </div>
  );
}

export default App;
