import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? 'bg-danger' : 'bg-success'} >
      <div className="d-flex justify-content-between mx-5">
      <div 
        className='fs-3 text'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='fs-3 text'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
      </div>
    </div>
  );    
}

export default Tarea;