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
    this.getHeight();
  }

  getHeight() {
    const div = document.querySelector('.intro-page');
    const rect = div.getBoundingClientRect();
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= rect.bottom / 2) {
        this.props.handleBgColorChange(true);
      } else {
        this.props.handleBgColorChange(false);
      }
    });
  }

  render() {
    const intro = 'My name is Lambert Tran.' + "\n" +
                  'I\'m an inspired full-stack developer';
    return (
      <div className="intro-page">
        <div className="content">
          <ReactCSSTransitionGroup
            transitionName="fadeIn"
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionEnter={false}
            transitionLeave={false}
          >      
            <h1 key="intro-header1">Wellcome!</h1>
            <h2 key="intro-header2">Good to see you here</h2>
            <AvatarTalk key="intro-avatar" talk={intro} dimen="100px" fontSize="25px" />
            <h2 key="intro-header3">Let me show you my story</h2>
          </ReactCSSTransitionGroup>
        </div>
      </div>
    );
  }
}