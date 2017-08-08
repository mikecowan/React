import React, { Component } from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

class ButtonObj extends Component {
  constructor() {
    super();
    this.state = {
      buttonText: 'text',
    };
  }

  render() {
    return (
      <button>{this.state.buttonText}</button>
    );
  }
}

//  onClick={() => this.handleClick()}

export default ButtonObj;