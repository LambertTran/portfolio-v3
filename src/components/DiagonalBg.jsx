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
      zIndex: -10, 
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  
  // add scroll listener
  componentDidMount() {
    window.addEventListener('scroll',this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll',this.handleScroll);
  }

  // set new width base on user scrolling
  handleScroll() {
    let speed = 1;
    this.setState({ zIndex: 1 });
    if (window.scrollY / speed <= 100){
      const newWidth = 0 + window.scrollY/speed;
      this.setState({ width: newWidth });
    } else {
      this.setState({ width: 125 });
    }
  }

  render() {
    const width = this.state.width + '%';
    const zIndex = { zIndex: this.state.zIndex};
    return (
      <div className="diagonal-bg" style={zIndex}>
        <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
          <line x1='50%' y1='0' x2='50%' y2='100%' stroke='#303036' strokeWidth={width}/>
        </svg>
      </div>
    );
  }
}

export default DiagonalBg;
