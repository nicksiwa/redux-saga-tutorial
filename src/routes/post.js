import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Post from '../components/posts';
import PostDetail from '../components/posts/PostDetail';

class PostRoute extends Component {
  render() {
    const { match } = this.props;
    return (
      <Switch>
        <Route exact path={match.path} component={Post} />
        <Route path={`${match.path}/:postId`} component={PostDetail} />
      </Switch>
    );
  }
}

export default PostRoute;
