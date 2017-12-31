/** Packages */
import React from 'react';

/** Components */
import AvatarTalk from '../components/AvatarTalk';
// import DiagonalBg from '../components/DiagonalBg';
/** Styles */
import '../styles/css/IntroPage.css';

/** Class */
export default function IntroPage(props) {
  const intro = 'My name is Lambert Tran.' + "\n" +
                'Im an inspired full-stack developer';
  return (
    <div className="intro-page">
      <div className="content">
        <h1>Wellcome!</h1>
        <h1>Good to see you here</h1>
        <AvatarTalk talk={intro} dimen="100px" fontSize="25px" />
        <h3>Let me show you my story</h3>
      </div>
    </div>
  );
}