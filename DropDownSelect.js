import React, { Component } from 'react';
//import './Button.css'; // Tell Webpack that Button.js uses these styles

class DropDownSelect extends Component {
  render() {
    return (
      <option value={this.props.index}>{this.props.value}</option>
    );
  }
}

export default DropDownSelect;