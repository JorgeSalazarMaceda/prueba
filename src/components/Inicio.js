import React from 'react'
import { Link } from 'react-router-dom'
import { Contacto } from './Contacto'
import { ListadoTrabajosRandom } from './ListadoTrabajosRandom'

export const Inicio = () => {
  return (
    <div className='home'>

      <h1>
        Hola, soy Jorge, desarrollador web con experiencia en HTML, CSS, Bootstrap, SASS, Java, JS,
        React.js, PHP, MySQL y Git. Ofrezco mis servicios de <strong>programación y desarrollo</strong> en Madrid. Seguidor de las
        las Metodologías Ágiles, con habilidades en el sector legal, así que espero que podamos trabajar juntos.
      </h1>

      <h2 className='tittle'>Te ayudo a crear tu sitio o app web<Link to='/contacto'> Contacta conmigo.</Link></h2>
    
      {/* Poner carrousel de proyectos */}
      <section className='last-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis proyectos</p>

        <div className='works'>
          <ListadoTrabajosRandom limite='2'/> {/* Pasamos una prop para que se muestren menos proyectos en inicio, el limite será 2 y lo pasamos al componente */}
        </div>
      </section>
    </div>
  )
}
