/** Packages */
import React from 'react';

/** Components */
import AvatarTalk from '../components/AvatarTalk';

/** Styles */
import '../styles/css/TechPage.css';

/** Class */
export default function TechPage() {
  const talk = 'The list below is the technologies I used';

  return (
    <div id="tech-page" className="tech-page">
      <div className="tech-content">
        <AvatarTalk talk={talk} />    
        <div className="tech-list">
          <i className="devicon-javascript-plain colored"></i>
          <i className="devicon-react-original-wordmark"></i>
          <i className="devicon-nodejs-plain-wordmark"></i>
          <i className="devicon-express-original-wordmark colored"></i>
          <i className="devicon-mongodb-plain-wordmark colored"></i>
          <i className="devicon-mysql-plain-wordmark colored"></i>
          <i className="devicon-amazonwebservices-plain-wordmark"></i>
          <i className="devicon-dot-net-plain-wordmark"></i>
          <i className="devicon-csharp-plain-wordmark"></i>
        </div>
      </div>
    </div>
  )
}