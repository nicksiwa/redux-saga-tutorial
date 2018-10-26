import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PostItem extends Component {
  render() {
    const {
      post,
      match,
      deletePost,
      editPost
    } = this.props;
    
    return (
      <Table.Row>
        <Table.Cell>
          <Link to={`${match.url}/${post.id}`}>
            {post.id}
          </Link>
        </Table.Cell>
        <Table.Cell>{post.title}</Table.Cell>
        <Table.Cell>{post.body}</Table.Cell>
        <Table.Cell>{post.author}</Table.Cell>
        <Table.Cell>
          <Button onClick={() => editPost(post.id)}>Edit</Button>
          <Button onClick={() => deletePost(post.id)}>Delete</Button>
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default PostItem;
