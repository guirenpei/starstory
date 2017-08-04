'use strict';
/* eslint no-console:0*/
require('normalize.css/normalize.css');

import React from 'react';
import ReactDOM from 'react-dom';

/*ref Attributes start*/
class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.focus = this.focus.bind(this);
  }
  focus() {
    // Explicitly focus the text input using the raw DOM API
    this.textInput.focus();
  }
  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in this.textInput.
    return (
      <div>
        <input
          type="text"
          ref={(input) => this.textInput = input}
        />
        <input
          type="button"
          value="Summary"
          onClick={this.focus}
        />
      </div>
    );
  }
}

/*ref Attributes end*/
function Summary() {
  return (
    <div>
      <CustomTextInput />
    </div>
  )
}

export default Summary;
