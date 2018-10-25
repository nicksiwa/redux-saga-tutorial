import React, { Component } from 'react';
import TestForm from './TestForm';

class MainPage extends Component {
  render() {
    return (
      <div>
        Main Page
        <TestForm onSubmit={v => console.log(v)} />
      </div>
    );
  }
}

export default MainPage;
