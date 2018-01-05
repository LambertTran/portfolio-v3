/** Packages */
import React from 'react';
import Modal from 'react-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/** Component */
import ProjectContent from './ProjectContent';

/** Images */
import avatar from '../images/avatar.png';

/** Styles */
import '../styles/css/Project.css';

/**
 * Each project has 2 main components
 *    + Background image
 *    + Modal to display project content
 */

const modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content: {
    width                 : '90%',
    top                   : '55%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    border                : '1px solid #ccc',
    borderRadius          : '20px',
    height             : '500px',
    overflow              : 'scroll',
    padding               : '0',
  },
};

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInView : false, 
      isModalOpen: false,
    };

    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  handleCloseModal() {
    this.setState({ isModalOpen: false });
  }
  handleOpenModal() {
    this.setState({ isModalOpen: true });
  }


  render() {
    const { data } = this.props;
    return (
      <div className="project-item">
        <div 
          className="project-bg" 
          onClick={this.handleOpenModal}
          style={{backgroundImage: `url(${data.image})`}}
        >
          <h1 className="project-name">{data.name}</h1>
        </div>
        <Modal
          isOpen={this.state.isModalOpen}
          style={modalStyle}
          contentLabel="project modal"
        >
          <button className="close-btn" type="button" onClick={this.handleCloseModal}>&#10006;</button>
          <ProjectContent data={data} />
        </Modal>
      </div>
    )
  }
}