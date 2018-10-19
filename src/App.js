import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/main';
import LoginLayout from './layouts/login';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={LoginLayout} />
          <Route path='/' component={MainLayout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
