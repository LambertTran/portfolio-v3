/** Packages */
import React from 'react';

/** Images */
import avatar from '../images/avatar.png';

/** Styles */
import '../styles/css/Avatar.css';

export default function AvatarTalk(props) {
  let imgDimens;
  let fontSize;
  if (props.dimen) {
    imgDimens = {
      height:props.dimen,
      width:props.dimen,
    };
  }
  if (props.fontSize) {
    fontSize = fontSize;
  }
  return (
    <div className="avatar" >
      <img src={avatar} style={imgDimens} alt="avatar" />
      
      <p style={fontSize}>{props.talk}</p>
    </div>
  )  
}