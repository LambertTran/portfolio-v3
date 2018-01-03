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
      loading: false,
      bgColor: 'linear-gradient(to right bottom, #FC5130, #30BCED)',
    };
    this.handleBgColorChange = this.handleBgColorChange.bind(this);
  }

  // Add loader before page rendering
  componentDidMount() {
    this.setState({ loading: false });
  }

  // Handle change background color
  handleBgColorChange(changeBg) {
    if (changeBg) {
      console.log("here")
      this.setState({
        bgColor: 'linear-gradient(to right bottom, #FC5130, #FFFAFF)',
      });
    } else {
      this.setState({
        bgColor: 'linear-gradient(to right bottom, #FC5130, #30BCED)',
      });
    }
  }

  render() {
    const { loading, bgColor } = this.state;
    // render loader before page completes loading data
    if (loading) {
      return (
        <div className="loader-container">
          <div className="loader" />
        </div>
      );
    }
    return (
      <div style={{ background: bgColor }} >
        <div className="wrapper">
          <Navbar />
          <IntroPage handleBgColorChange={this.handleBgColorChange} />
          <TechPage />
          <ProjectPage />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
