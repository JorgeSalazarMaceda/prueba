import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Portafolio } from '../components/Portafolio';
import { Servicios } from '../components/Servicios';
import { Curriculum } from '../components/Curriculum';
import { Contacto } from '../components/Contacto';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Proyecto } from '../components/Proyecto';
import LanguageDropDown from '../components/LanguageDropDown';

const settings = {
    language: 'es', // Establece el idioma predeterminado
    supportedLanguages: ["es", "en", "fr"],
    language_strings: {
      es: {
        inicio: "Sobre mí",
        portafolio: "Portafolio",
        servicios: "Servicios",
        curriculum: "Currículum",
        contacto: "Contacto",
        idioma: "Idioma"
      },
      en: {
        inicio: "About Me",
        portafolio: "Portfolio",
        servicios: "Services",
        curriculum: "Curriculum Vitae",
        contacto: "Contact",
        idioma: "Language"
      },
      fr: {
        inicio: "À propos de moi",
        portafolio: "Portefeuille",
        servicios: "Services",
        curriculum: "Curriculum Vitae",
        contacto: "Contact",
        idioma: "Langue"
      }
    },
    changeLanguage: (newLanguage) => {
      // Verifica si el nuevo idioma es válido
      if (settings.supportedLanguages.includes(newLanguage)) {
        // Actualiza el idioma actual en las configuraciones
        settings.language = newLanguage;
  
        // Aquí puedes agregar más lógica si es necesario,
        // como actualizar el estado global de la aplicación,
        // recargar la página, etc.
  
        console.log(`Idioma cambiado a ${newLanguage}`);
      } else {
        console.error(`El idioma ${newLanguage} no está soportado.`);
      }
    }
  };
  


export const MisRutas = () => {
    return (
        <BrowserRouter>

            {/* HEADER Y NAVEGACION */}
            <HeaderNav settings={settings} />
            {/* CONTENIDO --> Donde irán los componentes, entonces irán las rutas (Routes, Route) */}
            <section className='content'>
                <Routes>
                    <Route path='/' element={<Navigate to='/inicio' />} /> {/* Redirigimos al inicio por defecto para que se apliquen estilos css */}
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/portafolio' element={<Portafolio />} />
                    <Route path='/servicios' element={<Servicios />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='/proyecto/:id' element={<Proyecto />} />
                    <Route path='*' element={
                        <div className='page'>
                            <h1 className='heading'>Error 404</h1>
                        </div>
                        } />
                      
                    
                </Routes>
            </section>



            {/* FOOTER */}
            <Footer />
        </BrowserRouter>
    )
}
