/** Packages */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/** Images */
import avatar from '../images/avatar.png';

/** Styles */
import '../styles/css/Avatar.css';

/** Helpers */
import isElementInView from '../helpers/isElementInView';

export default class AvatarTalk extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opacity : 0 };
    this.handleInView = this.handleInView.bind(this);
  }

  componentDidMount() {
    if (this.props.static) {
      this.handleInView();
    }
  }

  handleInView() {
    this.setState({ opacity: 1 });
  }

  checkDefaultValues() {
    let imgDimens;
    let fontSize;
    if (this.props.dimen) {
      imgDimens = {
        height:this.props.dimen,
        width:this.props.dimen,
      };
    }
    if (this.props.fontSize) {
      fontSize = fontSize;
    }
    return {fontSize , imgDimens};  
  }

  render() {
    const {fontSize , imgDimens} = this.checkDefaultValues();
    // if (this.state.opacity < 1) {
    //   return (
    //     <div className="avatar"
    //     style= {{opacity: 0}}
    //       ref={(avatarElement) => this.avatarElement = avatarElement}
    //     >
    //       <img src={avatar} style={imgDimens} alt="avatar" />
    //       <p style={fontSize}>{this.props.talk}</p>
    //     </div>
    //   )
    // }
    return (
      // <ReactCSSTransitionGroup
      //       transitionName="slideUp"
      //       transitionAppear={ true }
      //       transitionAppearTimeout={1000}
      //       transitionEnter={ false }
      //       transitionLeave={ false }
      // >
        <div className="avatar-container">
          <div className="avatar" style={{opacity:this.state.opacity}}
            ref={(avatarElement) => this.avatarElement = avatarElement}
          >
            <img src={avatar} style={imgDimens} alt="avatar" />
            <p style={fontSize}>{this.props.talk}</p>
          </div>
        </div>  
      // </ReactCSSTransitionGroup>
    );  
  }
}