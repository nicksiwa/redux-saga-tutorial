import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, Header } from 'semantic-ui-react';
import { createPostPending, updatePostSubmitting } from '../../actions/post';
import { getPostById } from '../../reducers/selector';

class PostForm extends Component {
  render() {
    const {
      handleSubmit,
      onSubmit,
      isEditing,
      match,
      onEditSubmit
    } = this.props;

    return (
      <div>
        <Header as="h1">{!isEditing ? "Create Post" : `Edit Post ID : ${match.params.postId}`}</Header>
        <Form onSubmit={!isEditing ? handleSubmit(v => onSubmit(v)) : handleSubmit(v => onEditSubmit(v))}>
          <Form.Field>
            <label>Post title</label>
            <Field name="title" component="input" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Post body</label>
            <Field name="body" component="input" type="text" />
          </Form.Field>
          <Form.Field>
            <label>Post author</label>
            <Field name="author" component="input" type="text" />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  initialValues: state.post.isEditing ? getPostById(state.post.data, ownProps.match.params.postId) : {},
  isEditing: state.post.isEditing
})

const mapDispatchToProps = dispatch => ({
  onSubmit: v => dispatch(createPostPending(v)),
  onEditSubmit: v => dispatch(updatePostSubmitting(v))
})

PostForm = reduxForm({
  form: 'post'
})(PostForm);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);
