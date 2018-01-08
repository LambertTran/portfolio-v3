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
export default function ProjectPage() {
  const talk1 = 'Finally! We are here. My proud projects!';
  const talk2 = 'Feel free to browse my works';
  return (
    <div className="project-page">
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
  )
}