import React from 'react';
import '../styles/Tarea.css'
import { AiFillCloseCircle } from "react-icons/ai"; // Importamos el icono en específico


/* Tomamos los props CON sintaxis de desestructuración, 
al pasar tiene que ser el mismo nombre el prop */
function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={completada ? 'tarea-container completada' : 'tarea-container'}>
            <div 
                className='tarea-texto' 
                onClick={ () => completarTarea(id) }
            >
                {texto}
            </div>

            <div 
                className='tarea-contenedor-iconos'
                onClick={ () => eliminarTarea(id) }>
                <AiFillCloseCircle className='tarea-icono' />
            </div>
        </div>
    );
}

export default Tarea;