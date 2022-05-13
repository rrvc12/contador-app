import './App.css';
import logo from './images/click.png';
import Boton from './components/Boton.js';
import Contador from './components/Contador.js';
import React from 'react';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      numeroClics: 0
    };

    this.manejarClic = this.manejarClic.bind(this);
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic(){
    this.setState(({ numeroClics })=>({numeroClics: numeroClics + 1})
    );
  }

  reiniciarContador(){
    this.setState({numeroClics: 0});
  }

  render(){
    return (
      <div className='App'>
        <div className='logo-contenedor'>
          <img className='logo-imagen' src={logo} alt='Logo de la Página'/>
          <h1 className='logo-nombre'>Contador de Clics</h1>
        </div>
        <div className='contenedor-principal'>
        <Contador numeroClics={this.state.numeroClics}/>
        <Boton texto='Clic' esBotonDeClic={true} manejarClic={this.manejarClic}/>
        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={this.reiniciarContador}/>
        </div>
        
      </div>
    );
  };
}

// function App() {
  
//   const [numeroClics, setNumeroClics] = useState(0);

//   const manejarClic = () => {
//     setNumeroClics(numeroClics+1);
//   }

//   const reiniciarContador = () => {
//     setNumeroClics(0);
//   }

//   return (
//     <div className='App'>
//       <div className='logo-contenedor'>
//         <img className='logo-imagen' src={logo} alt='Logo de la Página'/>
//         <h1 className='logo-nombre'>Contador de Clics</h1>
//       </div>
//       <div className='contenedor-principal'>
//       <Contador numeroClics={numeroClics}/>
//       <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic}/>
//       <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reiniciarContador}/>
//       </div>
      
//     </div>
//   );
// }

export default App;
