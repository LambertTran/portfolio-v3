/** Packages */
import React from 'react';

/** Styles */
import '../styles/css/Navbar.css';

/** Logo */
import logo from '../images/logo.png';

/** Class */
export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      bgColor: 'transparent',
      isBoxShadow: false,
    };
  }

  componentDidMount() {
    const nav = document.querySelector('.navbar');
    const rectNav = nav.getBoundingClientRect();
    window.addEventListener('scroll', () => {
      if (window.pageYOffset >= rectNav.bottom) {
        this.setState({ 
          bgColor: '#303036',
          isBoxShadow: true,
        });
      } else {
        this.setState({
          bgColor: 'transparent',
          isBoxShadow: false,
        });
      }
    });
  }
  render() {
    const { bgColor } = this.state;
    let border; 
    if (this.state.isBoxShadow) {
      border = "boxShadow";
    } 
    return (
      <nav className={`navbar ${border}`} style={{ backgroundColor: bgColor }} >
        <img src={logo} alt="logo"/>
        <ul>
          <li><a href="/tech-page">
            <i className="fa fa-wrench" aria-hidden="true"></i>
            <span>Techs</span>
          </a></li>
          <li><a href="/project-page">
            <i className="fa fa-folder-o" aria-hidden="true"></i>
            <span>Projects</span>
          </a></li>
          <li><a href="/contact-page">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>Contact</span>
          </a></li>
        </ul>
      </nav>
    )
  }
}
