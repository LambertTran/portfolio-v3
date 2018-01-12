/** Packages */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

/** Components */
import Navbar from './containers/Navbar';
import IntroPage from './containers/IntroPage';
import TechPage from './containers/TechPage';
import ProjectPage from './containers/ProjectPage';
import ContactPage from './containers/ContactPage';

/** Styles */
import './styles/css/Loader.css';
import './styles/css/Body.css';

/** Class */
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      bgColor: 'linear-gradient(to right bottom, #FC5130, #30BCED)',
    };
    this.handleBgColorChange = this.handleBgColorChange.bind(this);
  }

  // Add loader before page rendering
  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false });
      this.handleAvatarAmination();
  },1000);
    
  }

  handleAvatarAmination() {
    const avatars = document.querySelectorAll('.avatar');
    console.log(avatars)
    window.addEventListener('scroll', function() {
      const screen = (window.innerHeight * 0.95 )  + window.pageYOffset;
      for (let i=0; i < avatars.length; ++i) {
        const rect = avatars[i].getBoundingClientRect();
        const elPos = rect.bottom + window.scrollY;
        if (elPos <= screen) {
          avatars[i].style.opacity ='1';
        }
        if (elPos < window.pageYOffset + 200 || elPos > screen ){
          avatars[i].style.opacity ='0';
        }         
      }
    });
  }


  // Handle change background color
  handleBgColorChange(changeBg) {
    if (changeBg === 'techBg') {
      this.setState({
        bgColor: 'linear-gradient(to right bottom, #FC5130, #FFFAFF)',
        // bgColor: "red",
      });
    } else if (changeBg === 'projectBg') {
      this.setState({
        bgColor: 'white',
      });
    } else {
      this.setState({
        bgColor: 'linear-gradient(to right bottom, #FC5130, #30BCED)',
        // bgColor:"blue",
      });
    }  
  }

  render() {
    const { loading, bgColor } = this.state;
    let BgStyle;
    if (bgColor === 'white') {
      BgStyle = { backgroundColor: 'white'}
    } else {
      BgStyle = { background : bgColor}
    }
    

    // render loader before page completes loading data
    if (loading) {
      return (
        <div className="loader-container">
          <div className="loader">
            <span className="loader-inner" />
          </div>
        </div>
      );
    }
    return (
      <div className="portfolio" style={BgStyle} >
        <div className="wrapper">
          <Navbar />
          <IntroPage handleBgColorChange={this.handleBgColorChange} />
          <TechPage handleBgColorChange={this.handleBgColorChange} />
          <ProjectPage handleBgColorChange={this.handleBgColorChange}  />
          <ContactPage />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
