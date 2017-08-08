import React, { Component } from 'react';
//import './Button.css'; // Tell Webpack that Button.js uses these styles

class TextField extends Component {
  constructor() {
    super();
    this.state = {
      //buttonText: 'text',
    };
  }

  render() {
    return (
      <input type="text" size="10" onChange={this.props.handler} />
    );
  }
}

export default TextField;