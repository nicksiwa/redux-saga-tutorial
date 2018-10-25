import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import MainLayout from './layouts/main';
import LoginLayout from './layouts/login';
import history from './services/history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path='/login' component={LoginLayout} />
          <Route path='/' component={MainLayout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
