import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    
    /* Recogemos el valor de MisRutas.js del id por la url usando el useParams para hacer la búsqueda */
    const params = useParams();

    /* Para cargar el componente automaticamente una sola vez --> Recorremos con filter todos los trabajos y solo guardas el que el id coincide con params.id pasado por url   */
    useEffect(()=>{
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0]); /* Asignamos el proyecto a ese estado que estás filtrando con el indice 0 para seleccionar el unico proyecto que hay en la variable proyecto*/
    }, []); 

    return (
        <div className='page page-work'>
            <h1 className='heading'>Proyecto: {proyecto.nombre}</h1>
            <div className='mask'>
                  <img src={'/images/' + proyecto.id + '.png'} />
            </div>
            <p>Tecnologías: {proyecto.tecnologias}</p>
            <p>Descrpción: {proyecto.descripcion}</p>
            <a href={proyecto.url} target='_blank'>Ir al proyecto</a>
        </div>
    )
}