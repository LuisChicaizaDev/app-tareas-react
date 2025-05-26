import '../styles/InfoTareas.css';

function InfoTareas( {numTareas, tareasCompletadas} ) {
    return (
        <div className='info-tareas'>
            <p>Nº de tareas por completar:  <b> { numTareas.length } </b> </p>
            <p>Nº de tareas completadas:  <b> { tareasCompletadas.filter(tarea => tarea === true).length } </b> </p>
            <h4>Selecciona las tareas completadas</h4>
            
        </div>
    );
}

export default InfoTareas;