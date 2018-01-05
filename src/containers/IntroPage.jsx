/** Packages */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
/** Components */
import AvatarTalk from '../components/AvatarTalk';

/** Styles */
import '../styles/css/IntroPage.css';

/** Class */
export default class IntroPage extends React.Component {

  componentDidMount() {
    this.changeBgColor();
  }

  changeBgColor() {
    const div = document.querySelector('.intro-page');
    const rect = div.getBoundingClientRect();
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= rect.bottom / 2) {
        this.props.handleBgColorChange('techBg');
      } else {
        this.props.handleBgColorChange('introBg');
      }
    });
  }

  render() {
    const intro = 'My name is Lambert Tran.' + "\n" +
                  'I\'m an inspired full-stack developer';
    const talk = 'Let me show you my story';
    return (
      <div className="intro-page">
        <div className="content">
          <h1 key="intro-header1">Wellcome!</h1>
          <h2 key="intro-header2">Good to see you here</h2>
          <AvatarTalk key="intro-avatar-1" static={true} talk={intro} dimen="80px" fontSize="25px" />
          <AvatarTalk key="intro-avatar-2" static={true} talk={talk} fontSize="25px" />
        </div>
      </div>
    );
  }
}