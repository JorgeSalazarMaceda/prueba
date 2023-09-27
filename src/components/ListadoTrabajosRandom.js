// import React from 'react';
// import { trabajos } from '../data/trabajos';
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

// export const ListadoTrabajosRandom = () => {
//   return (
//     <section className='works'>
//       <div id="demo" className="carousel slide" data-bs-ride="carousel">
//         {/* Indicadores del carrusel */}
//         <ol className="carousel-indicators">
//           {trabajos.map((trabajo, index) => (
//             <li
//               key={index}
//               data-bs-target="#demo"
//               data-bs-slide-to={index}
//               className={index === 0 ? 'active' : ''}
//             ></li>
//           ))}
//         </ol>

//         {/* Slides del carrusel */}
//         <div className="carousel-inner">
//           {trabajos.map((trabajo, index) => (
//             <div key={trabajo.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
//               <img src={`/images/${trabajo.id}.png`} alt={trabajo.nombre} className="d-block w-100" />
//               <div className="carousel-caption">
//                 <span>{trabajo.categorias}</span>
//                 <h2><Link to={`/proyecto/${trabajo.id}`}>{trabajo.nombre}</Link></h2>
//                 <h3>{trabajo.tecnologias}</h3>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Controles del carrusel */}
//         <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
//           <span className="carousel-control-prev-icon"></span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
//           <span className="carousel-control-next-icon"></span>
//         </button>
//       </div>
//     </section>
    
//   );
// };

// Versión inicial
import React from 'react'
import { trabajos } from '../data/trabajos';
import { Link } from 'react-router-dom';

export const ListadoTrabajosRandom = ({limite}) => {
  return (
    
      <section className='works'>
        {
          trabajos.slice(0,limite).map(trabajo => {
            return (
                
              <article key={trabajo.id} className='work-item'>
                <div className='mask'>
                  <img src={'/images/' + trabajo.id + '.png'} />
                </div>
                <span>{trabajo.categorias}</span>
                <h2><Link to={'/proyecto/' + trabajo.id}>{trabajo.nombre}</Link></h2>
                <h3>{trabajo.tecnologias}</h3>
              </article>  
            );
          })
        }
      </section>
  )
}