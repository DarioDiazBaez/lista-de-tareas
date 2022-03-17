import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);
  }

  const manejarEnvio = e => {
    e.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva);
  }

  return (
<form className="input-group mb-3 px-5" onSubmit={manejarEnvio} >
  <input type="text" className="form-control" placeholder="Escribe una Tarea" aria-label="Recipient's username" name='texto' onChange={manejarCambio} />
  <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Agregar Tarea</button>
</form>
  );
}

export default TareaFormulario;
