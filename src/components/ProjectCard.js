import React from 'react';
import '../style/projectCard.css';
import PropTypes from 'prop-types';

function ProjectCard({ name, thumb }) {
  return (
    <div className="project-card">
      <h2 className="project-title">{ name }</h2>
      <img src={ thumb } alt={ name } className="project-image" />
    </div>
  );
}

export default ProjectCard;

ProjectCard.propTypes = {
  name: PropTypes.string,
  thumb: PropTypes.string,
}.isRequired;
