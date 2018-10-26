import React, { Component } from 'react';
import { Item, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getPostById } from '../../reducers/selector';
import { deletePostPending } from '../../actions/post';

class PostDetail extends Component {
  render() {
    const { post, deletePost } = this.props;
    return (
      <div>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as='a'>{post && post.id} {post && post.title}</Item.Header>
              <Item.Meta>Description</Item.Meta>
              <Item.Description>
                {post && post.body}
              </Item.Description>
              <Item.Extra>{post && post.author}</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <Button onClick={() => {}}>Edit</Button>
        <Button onClick={() => deletePost(post && post.id)}>Delete</Button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  post: getPostById(state.post.data, ownProps.match.params.postId)
})

const mapDispatchToProps = dispatch => ({
  deletePost: id => dispatch(deletePostPending(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
