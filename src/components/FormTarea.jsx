import React, { useState } from 'react';
import '../styles/Form.css';
import { v4 as uuidv4 } from 'uuid'; // Paquete para generar id unicos
import { AiFillPlusCircle } from "react-icons/ai";

/* Tomamos los props SIN sintaxis de desestructuración */
function Form(props) {

    // Estado inicial del input
    const [input, setInput] = useState(''); // Vacío para almacenar texto del input

    const manejarCambio = e => {
        // Obtenemos el último valor del input
        setInput(e.target.value);
        // console.log(e.target.value);
    };

    const manejarEnvio = e => {
        e.preventDefault();

        // Agregamos la tarea al estado
        const tareaNueva = {
            id: uuidv4(), // Genera un ID único
            texto: input, // El texto del input
            completada: false // Estado inicial
        };

        // Pasamos la tarea para la lista de tareas
        props.onSubmit(tareaNueva);
    };

    return (
        <form 
            className='tarea-form' 
            onSubmit={manejarEnvio}>
            <input 
                type='text' 
                placeholder='Escribe tu tarea...'
                className='tarea-input'
                name='tarea'
                onChange={manejarCambio}
            />
            <button className='tarea-boton'>
                <AiFillPlusCircle className='tarea-boton-icono' />
                Agregar Tarea
            </button>
        </form>
    );
}

export default Form;