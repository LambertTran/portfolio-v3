/** Packages */
import React from 'react';
import Modal from 'react-modal';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/** Component */
import ProjectContent from './ProjectContent';

/** Styles */
import 'animate.css';
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
    backgroundColor   : 'rgba(255, 255, 255, 0.75)',
    zIndex            : '20',
  },
  content: {
    position              : 'absolute',
    width                 : '90%',
    top                   : '0',
    bottom                : '0',
    right                 : '0',
    left                  :'0',
    margin                :'auto',
    border                : '1px solid #303036',
    borderRadius          : '20px',
    height                : '90%',
    overflow              : 'auto',
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

  componentWillMount() {
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
          className="animated fadeInDown"
          onRequestClose={this.handleCloseModal}
          isOpen={this.state.isModalOpen}
          style={modalStyle}
          shouldFocusAfterRender={false}
          contentLabel="project modal"
        >
          <button className="close-btn" type="button" onClick={this.handleCloseModal}>&#10006;</button>
          <ProjectContent data={data} />
        </Modal>
      </div>
    )
  }
}