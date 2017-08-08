import React, { Component } from 'react';

class RadioButton extends Component {
  render() {
    return (
      <label><input type="radio" name={this.props.name} onClick={this.props.handler} /> {this.props.value}</label>
    );
  }
}

export default RadioButton;