import React, { Component } from 'react';
import Navbar from '../components/shares/Navbar';
import MainRoute from '../routes/main';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MainRoute />
      </div>
    );
  }
}

export default MainLayout;
