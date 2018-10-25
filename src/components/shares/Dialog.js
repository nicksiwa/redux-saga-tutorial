import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Confirm } from 'semantic-ui-react';
import { confirmDialog, cancelDialog } from '../../actions/dialog';

class Dialog extends Component {
  render() {
    const { open, message, onConfirm, onCancel } = this.props;
    return (
      <Confirm
        open={open}
        content={message}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    );
  }
}

const mapStateToProps = state => ({
  open: state.dialog.open,
  message: state.dialog.message
})

const mapDispatchToProps = dispatch => ({
  onConfirm: () => dispatch(confirmDialog()),
  onCancel: () => dispatch(cancelDialog())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialog);
