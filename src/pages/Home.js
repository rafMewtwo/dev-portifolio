import React, { useContext } from 'react';
import Context from '../services/context/Context';
import devInfo from '../data/devInfo';
import Pontos from '../style/images/pontos.png';

function About() {
  const { user } = useContext(Context);
  
  const renderImage = () => {
    if (!user) return <img src={Pontos} alt="foto do dev" className="foto-perfil" />
    return <img src={user.avatar_url} alt="foto do dev" className="foto-perfil" />
  }

  return (
    <section className="jumbotron text-center home" id="home">
        <div className="container container-home">
          {renderImage()}
          <h1 className="jumbotron-heading corPrimaria">{devInfo.name}</h1>
          <p className="lead text-muted">{devInfo.description.resume}</p>
          <p>
            <a href={`https://gitconnected.com/${devInfo.uteis.githubUser}/resume`} target="_blank" className="btn btn-primary my-2">Curriculum Vitae</a>
            <a href="#" className="btn btn-secondary my-2">Call-to-action secundário</a>
          </p>
          <a href={devInfo.links.github} target="_blank"><i className="fab fa-github-square icones fa-2x"></i></a>
          <a href={devInfo.links.linkedin} target="_blank"><i className="fab fa-linkedin icones fa-2x"></i></a>
          <a href={devInfo.links.instagram} target="_blank"><i className="fab fa-instagram-square icones fa-2x"></i></a>
          <a href={`https://api.whatsapp.com/send?phone=55${devInfo.whatsapp}`} target="_blank"><i className="fab fa-whatsapp-square icones fa-2x"></i></a>
        </div>
      </section>
  );
}

export default About;
