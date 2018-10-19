import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsPending } from '../../actions/post';
import PostList from './PostList';
import Loading from '../shares/Loading';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const { posts, loading, match } = this.props
    if (loading) return <Loading />
    return (
      <div>
        <PostList posts={posts} match={match} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.data,
  loading: state.post.loading
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPostsPending())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
