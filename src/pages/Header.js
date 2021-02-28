import React from 'react';
import devInfo from '../data/devInfo';

function Header() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header">
      <a className="navbar-brand" href="#">{devInfo.name}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sobre">Sobre</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portifolio">Portifolio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contato">Contato</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
