import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../components/MainPage';
import PostRoute from './post';

class MainRoute extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/post' component={PostRoute} />
      </Switch>
    );
  }
}

export default MainRoute;
