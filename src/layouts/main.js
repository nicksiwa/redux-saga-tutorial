import React, { Component } from 'react';
import Navbar from '../components/shares/Navbar';
import MainRoute from '../routes/main';
import Dialog from '../components/shares/Dialog';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Dialog />
        <Navbar />
        <MainRoute />
      </div>
    );
  }
}

export default MainLayout;
