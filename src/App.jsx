
import React, { useState } from 'react';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import {BaseColaboradores} from './components/BaseColaboradores';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import Buscador from './components/Buscador'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  }

  return (
    <>
    <div className="App container align-items-center justify-content-center d-flex">
      <div className='colab'>
        <Formulario agregarColaborador={agregarColaborador} />
      </div>
      <Listado colaboradores={colaboradores} />
      <Buscador/>
    </div>
 
    </>
  )
}

export default App
