import React, { Component } from 'react';
import DropDownSelect from './DropDownSelect';

class DropDown extends Component {
  render() {
    var valueArray = this.props.values.split(',');

    var children = [];
    for (var i = 0; i < valueArray.length; i++) {
      children.push(<DropDownSelect index={i} value={valueArray[i]} />);
    }

    return (
      <select onChange={this.props.handler} >
        {children}
      </select>
    );
  }
}

export default DropDown;