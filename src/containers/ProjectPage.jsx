/** Packages */
import React from 'react';

/** Components */
import AvatarTalk from '../components/AvatarTalk';
import Project from '../components/Project';

/** Helper */

/** Styles */
import '../styles/css/ProjectPage.css';

/** Class */
export default function ProjectPage() {
  const talk1 = 'Finally! We are here. My proud projects!';
  const talk2 = 'Feel free to browse my works';
  return (
    <div className="project-page">
      <div className="project-content">
        <AvatarTalk key="project-talk-1" talk={talk1} />
        <AvatarTalk key="project-talk-2" talk={talk2} />

      </div>
    </div>
  )
}