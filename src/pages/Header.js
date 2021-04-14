import React, { useState } from 'react';
import devInfo from '../data/devInfo';

function Header() {
  const [menu, setMenu] = useState('collapse');

  const changeState = () => {
    if(menu==='collapse') return setMenu('dropdown');
    if(menu==='dropdown') return setMenu('collapse');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header">
      <a className="navbar-brand" href="#home">{devInfo.name}</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="dropdown"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-haspopup="true"
        aria-expanded="false"
        aria-label="Toggle navigation"
        onClick={changeState}
      >
        <span className="navbar-toggler-icon" />
      </button>

      <nav className={`row ${menu} navbar-collapse`} id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" />
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portifolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contato">Contato</a>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default Header;
