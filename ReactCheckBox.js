import React, { Component } from 'react';

class ReactCheckBox extends Component {
  render() {
    return (
      <div>
        <label><input type="checkbox" onClick={this.props.handler} checked={this.props.checkedStatus} /> {this.props.text}</label>
      </div>
    );
  }
}

export default ReactCheckBox;