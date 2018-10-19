import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PostItem extends Component {
  render() {
    const { post, match } = this.props;
    return (
      <Table.Row>
        <Table.Cell>
          <Link to={`${match.url}/${post.id}`}>
            {post.id}
          </Link>
        </Table.Cell>
        <Table.Cell>{post.title}</Table.Cell>
        <Table.Cell>{post.body}</Table.Cell>
        <Table.Cell>{post.userId}</Table.Cell>
      </Table.Row>
    );
  }
}

export default PostItem;
