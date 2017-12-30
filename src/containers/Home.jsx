import React from 'react';

// Components
import Name from '../components/Name';

// Styles
import '../styles/css/Home.css';
import '../styles/css/Loader.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true }
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
    return (
      <div className="red">
        <Name />
      </div>
    );
  }
}

export default Home;