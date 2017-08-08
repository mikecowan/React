import React, { Component } from 'react';
import RadioButton from './RadioButton';

class RadioButtonSet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedTrue: true,
      checkedFalse: false
    };
  }

  render() {
    var valueArray = this.props.values.split(',');

    var children = [];
    for (var i = 0; i < valueArray.length; i++) {
      if (i == this.props.selectedRadioIndex) {
        children.push(<RadioButton value={valueArray[i]} name={this.props.name} checkedStatus={this.state.checkedTrue} />);
      }
      else {
        children.push(<RadioButton value={valueArray[i]} name={this.props.name} checkedStatus={this.state.checkedFalse} />);
      }
    }

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default RadioButtonSet;