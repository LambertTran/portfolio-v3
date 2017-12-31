/** Packages */
import React from 'react';
import ReactDOM from 'react-dom';

/** Styles */
import '../styles/css/DiagonalBg.css';

class DiagonalBg extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: 0, 
      
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll',this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.handleScroll);
  }

  handleScroll() {
    let speed = 3;
    if (window.scrollY / speed <= 125){
      const newWidth = 0 + window.scrollY/speed;
      this.setState({ width: newWidth });
    } else {
      this.setState({ width: 125 });
    }
  }

  render() {
    const width = this.state.width + '%';
    return (
      <div className="diagonal-bg">
        <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
          <line x1='50%' y1='0' x2='50%' y2='100%' stroke='#64C2EC' strokeWidth={width}/>
        </svg>
      </div>
    );
  }
}

export default DiagonalBg;
