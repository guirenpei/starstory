'use strict';
/* eslint no-console:0*/
require('normalize.css/normalize.css');

import React from 'react';
import ReactDOM from 'react-dom';

/*ref Attributes start*/
class Shelf extends React.Component {

  componentDidMount() {
    console.log('username', this.props.params.username);
  }
  render() {
    // Use the `ref` callback to store a reference to the text input DOM
    // element in this.textInput.
    console.log('props', this.props);
    return (
      <div>
        <h1>{this.props.location.query.username}</h1>
      </div>
    );
  }
}

/*ref Attributes end*/

export default Shelf;
