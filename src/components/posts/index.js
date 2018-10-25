import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostsPending, deletePostPending } from '../../actions/post';
import PostList from './PostList';
import Loading from '../shares/Loading';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const {
      posts,
      loading,
      match,
      deletePost
    } = this.props

    if (loading) return <Loading />
    return (
      <div>
        <Link to={`${match.url}/create`}>New Post</Link>
        <PostList
          posts={posts}
          match={match}
          deletePost={deletePost}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.data,
  loading: state.post.loading
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPostsPending()),
  deletePost: id => dispatch(deletePostPending(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
