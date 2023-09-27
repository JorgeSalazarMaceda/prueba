import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageDropDown from '../LanguageDropDown';
import CustomButton from '../Button';
import translations from '../../strings/StringStorage.json';

export const HeaderNav = (props) => {
  const { language } = props.settings;

  console.log('HeaderNav se está renderizando con el idioma:', language);

  return (
    <header className='header'>
      <div className='logo'>
        <span>J</span>
        <h3>orge Salazar WEB</h3>
      </div>
      
      <nav>
        <ul>
          <li>
            <CustomButton>
              <NavLink to='/inicio' className={({ isActive }) => isActive ? 'active' : ''}>
                {translations.language_strings[language]['inicio']}
              </NavLink>
            </CustomButton>
          </li>
          <li>
            <CustomButton>
              <NavLink to='/portafolio' className={({ isActive }) => isActive ? 'active' : ''}>
                {translations.language_strings[language]['portafolio']}
              </NavLink>
            </CustomButton>
          </li>
          <li>
            <CustomButton>
              <NavLink to='/servicios' className={({ isActive }) => isActive ? 'active' : ''}>
                {translations.language_strings[language]['servicios']}
              </NavLink>
            </CustomButton>
          </li>
          <li>
            <CustomButton>
              <NavLink to='/curriculum' className={({ isActive }) => isActive ? 'active' : ''}>
                {translations.language_strings[language]['curriculum']}
              </NavLink>
            </CustomButton>
          </li>
          <li>
            <CustomButton>
              <NavLink to='/contacto' className={({ isActive }) => isActive ? 'active' : ''}>
                {translations.language_strings[language]['contacto']}
              </NavLink>
            </CustomButton>
          </li>
          <li>
            <LanguageDropDown settings={props.settings}>
              {translations.language_strings[language]["idioma"]}
            </LanguageDropDown>
          </li>
        </ul>
      </nav>
    </header>
  );
};
