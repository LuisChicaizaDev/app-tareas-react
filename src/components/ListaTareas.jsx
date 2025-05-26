import React, { useState} from 'react';
import FormTarea from './FormTarea';
import Tarea from './Tarea';
import InfoTareas from './InfoTareas';
import '../styles/ListaTareas.css';

function ListaTareas() {

    // Comprobar si hay tareas guardadas en el localStorage al iniciar la app
    const tareasGuardadas = localStorage.getItem('tareas_guardadas');
    const tareasIniciales = tareasGuardadas ? JSON.parse(tareasGuardadas) : []; // Si hay tareas guardadas las parseamos a un array si no será un array vacío

    // Estado inicial de tareas
    const [tareas, setTareas] = useState(tareasIniciales); // Estado según si hay tareas o no

    const agregarTarea = tarea => {
        //console.log('tarea agregada', tarea);
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();

            // Agregar tarea al estado al principio del array
            const actualizarTareas = [tarea, ...tareas];

            // Agregamos la tarea nueva al estado
            setTareas(actualizarTareas);

            // Guardar en localStorage
            localStorage.setItem('tareas_guardadas', JSON.stringify(actualizarTareas)); // transforma el array en un string
        }
    };

    const eliminarTarea = id  => { // Recibe un `id` como parámetro
        //console.log('tarea eliminada', id);

        // filtramos la tarea con el id
        const actualizarTareas = tareas.filter(tarea => tarea.id !== id);

        // Actualizamos el estado
        setTareas(actualizarTareas);

        // Guardar en localStorage
        localStorage.setItem('tareas_guardadas', JSON.stringify(actualizarTareas));
    };

    const completarTarea = id =>{
        // Recorremos el arrar de tareas
        const actualizarTareas = tareas.map( tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada; // Invierte el valor de completada
            }

            return tarea;
        });

        // Actualizamos el estado
        setTareas(actualizarTareas);
        
        // Guardar en localStorage
        localStorage.setItem('tareas_guardadas', JSON.stringify(actualizarTareas));
    };

    const sinTareas = tareas.length === 0 ? <h2>No tienes tareas. ¡Agrega una!</h2> : null;

    return (
        // Fragmentos <> son componentes que no renderizan nada en el DOM
        <>
            <FormTarea onSubmit={agregarTarea} />
            <div className='lista-tareas-container'>
                {/* Renderizar lista de componenentes */}
                {
                    tareas.map((tarea) =>
                        <Tarea 
                            key={tarea.id} // React Identificador de la tarea
                            id={tarea.id} // Prop de la tarea
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                }

                {sinTareas}

                <InfoTareas 
                    numTareas={tareas}
                    tareasCompletadas={tareas.map(tarea => tarea.completada)}
                />
                
            </div>
        </>
    );
}

export default ListaTareas;