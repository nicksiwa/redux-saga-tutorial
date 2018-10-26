import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPostsPending, deletePostPending, updatePostPending } from '../../actions/post';
import PostList from './PostList';
import Loading from '../shares/Loading';

class Post extends Component {
  componentDidMount() {
    this.props.fetchPosts()
  }

  render() {
    const {
      posts,
      isLoading,
      match,
      deletePost,
      editPost
    } = this.props

    if (isLoading) return <Loading />
    return (
      <div>
        <Link to={`${match.url}/create`}>New Post</Link>
        <PostList
          posts={posts}
          match={match}
          deletePost={deletePost}
          editPost={editPost}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.data,
  isLoading: state.post.isLoading
})

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPostsPending()),
  deletePost: id => dispatch(deletePostPending(id)),
  editPost: id => dispatch(updatePostPending(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
