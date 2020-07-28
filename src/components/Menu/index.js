import React from 'react';

import Button from '../Button';
// import ButtonLink from './components/ButtonLink';
import './styles.css'
import LogoImg from '../../assets/logo.png';

function Menu() {
  return  (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={LogoImg} alt="Notflix"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;