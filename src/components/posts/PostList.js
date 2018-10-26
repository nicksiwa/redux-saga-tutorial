import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import PostItem from './PostItem';

class PostList extends Component {
  render() {
    const {
      posts,
      match,
      deletePost,
      editPost
    } = this.props;

    return (
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Body</Table.HeaderCell>
            <Table.HeaderCell>Author</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {posts && posts.map(post => (
            <PostItem
              key={post.id}
              post={post}
              match={match}
              deletePost={deletePost}
              editPost={editPost}
            />
          ))}
        </Table.Body>
      </Table>
    );
  }
}

export default PostList;
