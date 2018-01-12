/** Packages */
import React from 'react';

/** Components */
import AvatarTalk from '../components/AvatarTalk';
import Project from '../components/Project';

/** store */
import projectData from '../store/project-data';

/** Styles */
import '../styles/css/ProjectPage.css';

/** Class */
export default class ProjectPage extends React.Component {

  componentDidMount() {
    this.changeBgColor();
  }  

  changeBgColor() {
    const div = document.querySelector('.project-page');
    const rect = div.getBoundingClientRect();
    window.addEventListener('scroll', () => {
      const screen = window.innerHeight  + window.pageYOffset;
      if (screen >= rect.bottom * 1.2) {
        this.props.handleBgColorChange('introBg');
      };
    });
  }
  render() {
    const talk1 = 'Next is my representative projects.';
    const talk2 = 'Feel free to browse and play around.';
    return (
      <div className="project-page" id="project-page">
        <div className="project-container">
          <AvatarTalk key="project-talk-1" talk={talk1} />
          <AvatarTalk key="project-talk-2" talk={talk2} />
          <div className="project-list">
            <Project data={projectData.auto27} />
            <Project data={projectData.todoApp} />
            <Project data={projectData.markdown} />
          </div>
        </div>
      </div>
    );
  }
}
