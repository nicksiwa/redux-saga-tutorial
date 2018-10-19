import React, { Component } from 'react';
import { Item } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getPostById } from '../../reducers/selector';

class PostDetail extends Component {
  render() {
    const { post } = this.props;
    return (
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header as='a'>{post && post.title}</Item.Header>
            <Item.Meta>Description</Item.Meta>
            <Item.Description>
              {post && post.body}
            </Item.Description>
            <Item.Extra>{post && post.userId}</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: getPostById(state.post.data, ownProps.match.params.postId)
})

export default connect(
  mapStateToProps
)(PostDetail);
