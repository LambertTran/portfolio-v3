/** Packages */
import React from 'react';
import Modal from 'react-modal';

/** Images */
import avatar from '../images/avatar.png';

/** Styles */
import '../styles/css/ProjectContent.css';

export default function ProjectContent(projectData) {
  const {data} = projectData;
  
  // render button for source code
  function renderSourceCode(link){
    return (
      <a href={link} target="_blank" >Source code</a>
    )
  }

  // render techs used in the project
  function renderTechs(techs) {
    return techs.map((tech) => 
      <li key={tech}>{tech}</li>
    )
  }
  return (
    <div className="project-content">
      <img src={data.image} alt="project-img"/>
      <div className="project-detail">
        <h1>{data.name}</h1>
        <p>{data.detail}</p>
        <p>Techs used:</p>
        <ul>
          {renderTechs(data.techs)}
        </ul>
      <div>
        {renderSourceCode(data.github)}
      </div>
      <div>
        {renderSourceCode(data.web)} */}
      </div>

      </div>
    </div>
  );
}