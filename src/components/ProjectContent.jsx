/** Packages */
import React from 'react';
import Modal from 'react-modal';

/** Images */
import avatar from '../images/avatar.png';

/** Styles */
import '../styles/css/ProjectContent.css';

export default function ProjectContent(projectData) {
  const { data } = projectData;
  // render button for source code
  function renderLinkBtn(links) {
    if (typeof links[0] !== "object") {
      return (
        <a className="linkBtn" href={links} target="_blank" >Link</a>
      );
    }
    return links.map((link) => {
      const linkName = Object.keys(link);
      const display = convertToDisplay(linkName[0]);
      return (
        <a className="linkBtn" key={linkName} href={link.linkName}>{display}</a>
      );
    })
  }

  function convertToDisplay(name) {
    for (let i = 0 ; i < name.length; ++i ) {
      if (name[i] === name[i].toUpperCase()) {
        let display = name.replace(name[i],` ${name[i]}`);
        display = display.replace(display[0], display[0].toUpperCase());
        return display;
      }
    }
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
        <h2>Sourcce codes:</h2>
        {renderLinkBtn(data.github)}
        <h2>Websites: </h2>
        {renderLinkBtn(data.web)}
      </div>

      </div>
    </div>
  );
}