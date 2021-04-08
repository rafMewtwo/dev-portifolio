import React from 'react';
import devInfo from '../data/devInfo';

function AboutRead() {
  return (
    <section className="jumbotron text-center corPrimaria" id="sobre">
      <div className="container">
        <h2 className="jumbotron-heading">Sobre Mim</h2>
        <p className="lead">{devInfo.description.fullDescription}</p>
        <h2 className="jumbotron-heading">Skills</h2>
        <ul className="about-list">
          <li>JavaScript Júnior</li>
          <li>HTML Júnior</li>
          <li>CSS Júnior</li>
          <li>React Júnior</li>
          <li>Jest Júnior</li>
          <li>React Testing Lib Básico</li>
          <li>Redux Júnior</li>
          <li>Context Júnior</li>
          <li>NodeJS Júnior</li>
          <li>SQL - MySQL Júnior</li>
          <li>NoSQL - MongoDb Júnior</li>
          <li>Express Básico</li>
          <li>GIT - GitHub Júnior</li>
          <li>ORM Sequelize Júnior</li>
          <li>Heroku Básico</li>
          <li>Vercel Básico</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutRead;
