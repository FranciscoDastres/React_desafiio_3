import React from 'react';
import { BaseColaboradores } from './BaseColaboradores';
import { Form, Button,Table } from 'react-bootstrap';
function Listado() {
  return (
    <div className="container">
      <h1>Listado de Colaboradores</h1>
      <table className="table mb-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {BaseColaboradores.map((colaborador) => (
            <tr key={colaborador.id}>
              <td>{colaborador.id}</td>
              <td>{colaborador.nombre}</td>
              <td>{colaborador.correo}</td>
              <td>{colaborador.edad}</td>
              <td>{colaborador.cargo}</td>
              <td>{colaborador.telefono}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listado;