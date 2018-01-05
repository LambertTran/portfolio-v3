/** Packages */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/** Images */
import avatar from '../images/avatar.png';

/** Styles */
import '../styles/css/Project.css';

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isInView : false };
  }

  render() {
    return (
      <div className="project-item">
        <img src={this.props.imgBg} alt="projectBg"/>
        <h3 className="project-name">{this.props.title}</h3>
      </div>
    )
  }
}