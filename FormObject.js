import React, { Component } from 'react';
import TextField from './TextField';
import Label from './Label';
import DropDown from './DropDown';
import RadioButtonSet from './RadioButtonSet';
import RadioButton from './RadioButton';
import ReactCheckBox from './ReactCheckBox';

//import './Button.css'; // Tell Webpack that Button.js uses these styles

class FormObject extends Component {
  constructor(props) {
    super(props);
    var minAge = 18;
    var maxAge = 65;
    var dropDownVals = GenerateSequentialIntegerString(minAge, maxAge);

    this.state = {
      nameFieldText: '',
      ageDropDownSelectedIndex: 0,
      dropDownValues: dropDownVals,
      selectedGender: '',
      notRobot: false,
      nameLabelValue: '',
      ageLabelValue: '',
      genderLabelValue: '',
      robotLabelValue: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleRobotChange = this.handleRobotChange.bind(this);
  }

  handleClick() {
    var ageValue = this.state.ageDropDownSelectedIndex + 18;

    try {
      this.setState({
        nameLabelValue: NameIsValid(this.state.nameFieldText)
                        ? 'Welcome, ' + this.state.nameFieldText
                        : 'enter name',
        ageLabelValue: AgeIsValid(this.state.ageDropDownSelectedIndex)
                        ? 'age: ' + ageValue
                        : 'must be at least 21',
        genderLabelValue: GenderIsValid(this.state.selectedGender)
                        ? 'gender: ' + this.state.selectedGender
                        : 'select a gender',
        robotLabelValue: RobotIsValid(this.state.notRobot)
                        ? 'not a robot'
                        : 'sorry, no robots allowed'
      });
    }
    catch (ex) {
      console.error(ex.message);
    }
  }

  handleNameChange(event) {
    event.preventDefault();
    this.setState({
      nameFieldText: event.target.value
    });
  }

  handleAgeChange(event) {
    event.preventDefault();
    this.setState({
      ageDropDownSelectedIndex: event.target.selectedIndex
    });
  }

  handleGenderChange(event) {
    this.setState({
      selectedGender: event.target.labels[0].innerText // hack fix, intended to set the radio index then make a function to map indices to strings
    });
  }

  handleRobotChange(event) {
    this.setState({
      notRobot: event.target.checked
    });
  }

  render() {
    return (
      <div>
        <p>
          Name: <TextField
                  value={this.state.nameFieldText}
                  handler={this.handleNameChange} /></p>

        <p>Age: <DropDown
                  values={this.state.dropDownValues}
                  selectedIndex={this.state.ageDropDownSelectedIndex} 
                  handler={this.handleAgeChange} /></p>

        <p>Gender: <RadioButton 
                        name="genderRadio" 
                        value="Male"
                        handler={this.handleGenderChange}
                        className="male" />
                   <RadioButton
                        name="genderRadio"
                        value="Female"
                        handler={this.handleGenderChange} /></p>

        <ReactCheckBox
          text="I am not a robot"
          checkedStatus={this.state.notRobot}
          handler={this.handleRobotChange} />

        <button onClick={() => this.handleClick()}>button</button>

        <Label value={this.state.nameLabelValue} />
        <Label value={this.state.ageLabelValue} />
        <Label value={this.state.genderLabelValue} />
        <Label value={this.state.robotLabelValue} />
      </div>
    );
  }
}

function FormIsValid(state) {

  var validation = NameIsValid(state.nameFieldText) &&
                    AgeIsValid(state.ageDropDownSelectedIndex) &&
                    GenderIsValid(state.genderSelection) &&
                    RobotIsValid(state.notRobot);

  return validation;
}

function NameIsValid(nameText) {
  return nameText;
}

function AgeIsValid(ageIndex) {
  return ageIndex > 2;
}

function GenderIsValid(gender) {
  return gender;
}

function RobotIsValid(robot) {
  return robot;
}

function GenerateSequentialIntegerString(min, max) {
  var rangeArray = [];
  for (var i = min; i <= max; i++) {
    rangeArray.push(i);
  }

  return rangeArray.join(",");
}

export default FormObject;