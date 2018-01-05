/** Packages */
import React from 'react';

/** Components */
import AvatarTalk from '../components/AvatarTalk';
import Project from '../components/Project';

/** data */
import projectData from '../data/project-data';

/** Styles */
import '../styles/css/ProjectPage.css';

/** Class */
export default function ProjectPage() {
  const talk1 = 'Finally! We are here. My proud projects!';
  const talk2 = 'Feel free to browse my works';
  return (
    <div className="project-page">
      <div className="project-list">
        <AvatarTalk key="project-talk-1" talk={talk1} />
        <AvatarTalk key="project-talk-2" talk={talk2} />
        <Project data={projectData.auto27} />
      </div>
    </div>
  )
}