import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class TestForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field name="test" component="input" type="text" />
        <button>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: () => {}
})

TestForm = connect(
  null,
  mapDispatchToProps
)(TestForm);

export default reduxForm({
  form: 'test'
})(TestForm);
