/** Packages */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

/** Components */
import IntroPage from './containers/IntroPage';
import TechPage from './containers/TechPage';
import ProjectPage from './containers/ProjectPage';
import Navbar from './containers/Navbar';
import DiagonalBg from './components/DiagonalBg';

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
    },500);
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
          <div className="loader" />
        </div>
      );
    }
    return (
      <div className="portfolio" style={BgStyle} >
        <div className="wrapper">
          <Navbar />
          <IntroPage handleBgColorChange={this.handleBgColorChange} />
          <TechPage handleBgColorChange={this.handleBgColorChange} />
          <ProjectPage />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
