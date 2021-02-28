import React from 'react';
import devInfo from '../data/devInfo';

function AboutRead() {
  return (
    <section className="jumbotron text-center corPrimaria" id="sobre">
      <div className="container">
        <h2 className="jumbotron-heading">Sobre Mim</h2>
        <p className="lead">{devInfo.description.fullDescription}</p>
      </div>
    </section>
  );
}

export default AboutRead;
