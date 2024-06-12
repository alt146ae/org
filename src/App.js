import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/formulario/formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';

/*console.log(Header)*/

function App() {
  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra
  const [mostrarFormulario, actualizarMostrar] = useState(true)

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostrarFormulario)
  }



  return (
    <div className="App">
      <Header />
      {/* { mostrarFormulario === true ? <Formulario /> : <div></div> } */}
      {mostrarFormulario && <Formulario />}
      <MiOrg cambiarMostrar={cambiarMostrar} />
      <Equipo />

    </div>
  );
}

export default App;
