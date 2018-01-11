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

    this.handleBgChange = this.handleBgChange.bind(this);
  }

  componentDidMount() {
    this.handleBgChange();
    this.handScroll();
  }
  
  handScroll() {
    const navbar = document.querySelectorAll('#navbar-click');
    navbar.forEach(function(el){
      el.addEventListener('click', function() {
        const gotoEl = this.getAttribute('name');
        const pos = document.getElementById(gotoEl).getBoundingClientRect().top + window.scrollY - 70;
        console.log(pos)
        window.scrollTo({
          top:pos,
          left:0,
          behavior: 'smooth',
        })
      });
    })
  }

  handleBgChange(){
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
        <a href="/">
          <img src={logo} alt="logo"/>
        </a>
        <ul id="navbar">
          <li id='navbar-click' name="tech-page">
            <i className="fa fa-wrench" aria-hidden="true"></i>
            <span>Techs</span>
          </li>
          <li id='navbar-click' name="project-page">
            <i className="fa fa-folder-o" aria-hidden="true"></i>
            <span>Projects</span>
          </li>
          <li id='navbar-click' name="contact-page">
            <i className="fa fa-phone" aria-hidden="true"></i>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    )
  }
}
