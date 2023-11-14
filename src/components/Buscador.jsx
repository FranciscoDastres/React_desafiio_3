import React, { useState } from 'react';
import {BaseColaboradores} from './BaseColaboradores';

function Buscador() {
  const [filtro, setFiltro] = useState(''); // Estado para el filtro
  const [colaboradoresFiltrados, setColaboradoresFiltrados] = useState([]);

  const handleFiltroChange = (e) => {
    const filtroText = e.target.value.toLowerCase();

    const colaboradoresFiltrados = BaseColaboradores.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(filtroText) ||
        colaborador.correo.toLowerCase().includes(filtroText) ||
        colaborador.cargo.toLowerCase().includes(filtroText) ||
  
        colaborador.telefono.toString().includes(filtroText) // Filtra por número de teléfono
    );

    setFiltro(filtroText);
    setColaboradoresFiltrados(colaboradoresFiltrados);
  };

  return (
    <div className="container">
      <h1>Buscador</h1>
      {/* Input para el filtro */}
      <input
        type="text"
        placeholder="Filtrar por nombre, correo, cargo, número o teléfono"
        value={filtro}
        onChange={handleFiltroChange}
      />
      <table className="table">
        <tbody>
          {colaboradoresFiltrados.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td> {/* Mostrar número de teléfono */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Buscador;