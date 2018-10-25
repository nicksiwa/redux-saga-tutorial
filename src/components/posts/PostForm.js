import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';
import { createPostPending } from '../../actions/post';

class PostForm extends Component {
  render() {
    const { handleSubmit, onSubmit } = this.props;
    return (
      <Form onSubmit={handleSubmit(v => onSubmit(v))}>
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
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: v => dispatch(createPostPending(v))
})

PostForm = connect(
  null,
  mapDispatchToProps
)(PostForm);

export default reduxForm({
  form: 'post'
})(PostForm);
