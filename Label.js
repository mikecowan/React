import React, { Component } from 'react';
//import './Button.css'; // Tell Webpack that Button.js uses these styles

class Label extends Component {
  render() {
    return (
      <p>{this.props.value}</p>
    );
  }
}

export default Label;