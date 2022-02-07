import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import Form from './components/Form/Form';

const initInput = [
  '2;1;gender;SELECT;Male,Female',
  '1;1;First Name;TEXT_INPUT;Enter your first name',
  '2;2;marital status;SELECT;Single,Maried,Divorced',
  '1;2;Last Name;TEXT_INPUT;Enter your last name',
];

class App extends Component {
  state = {
    input: initInput.sort(),
  };

  render() {
    return (
      <div className="wrapper">
        <Form inputStrings={this.state.input}></Form>
      </div>
    );
  }
}

export default App;
