/** Packages */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

/** Components */
import IntroPage from './containers/IntroPage';
import TechPage from './containers/TechPage';
import ProjectPage from './containers/ProjectPage';

/** Styles */
import './styles/css/Loader.css';

/** Class */
class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000);
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div className="loader-container">
          <div className="loader" />
        </div>
      );
    }
    return(
      <div>
        <IntroPage />
        <TechPage />
        <ProjectPage />
      </div>
    )
  }
}

ReactDOM.render(<Wrapper />, document.getElementById('root'));
registerServiceWorker();
