import React, { useState } from 'react';
import {BaseColaboradores} from './BaseColaboradores';
import Alert from './Alert';

function Formulario({ agregarColaborador }) {
  const [nuevoColaborador, setNuevoColaborador] = useState({
    id: 4,
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoColaborador({ ...nuevoColaborador, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (
      nuevoColaborador.nombre.trim() === '' ||
      nuevoColaborador.correo.trim() === '' ||
      nuevoColaborador.edad.trim() === '' ||
      nuevoColaborador.cargo.trim() === '' ||
      nuevoColaborador.telefono.trim() === ''
    ) {
      alert('Todos los campos son obligatorios');
      return;
    }

    BaseColaboradores.push(nuevoColaborador)
    agregarColaborador(nuevoColaborador);

    // Incrementar el ID para el siguiente colaborador

    setNuevoColaborador((prevColaborador) => ({
      ...prevColaborador,
      id: prevColaborador.id + 1,
    }));

    // Limpiar los campos del formulario
    setNuevoColaborador({
      id: nuevoColaborador.id + 1, // Incrementa el ID para el siguiente
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
  };


  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={nuevoColaborador.nombre}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo:
          </label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={nuevoColaborador.correo}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">
            Edad:
          </label>
          <input
            type="number"
            className="form-control"
            id="edad"
            name="edad"
            value={nuevoColaborador.edad}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cargo" className="form-label">
            Cargo:
          </label>
          <input
            type="text"
            className="form-control"
            id="cargo"
            name="cargo"
            value={nuevoColaborador.cargo}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Teléfono:
          </label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            value={nuevoColaborador.telefono}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar
        </button>
     
      </form>
    </div>
  );
}

export default Formulario;