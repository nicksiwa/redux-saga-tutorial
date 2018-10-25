import { DIALOG } from '../constants/actionTypes';

export function openDialog(message) {
  return {
    type: DIALOG.OPEN_DIALOG,
    message: message
  }
}

export function closeDialog() {
  return {
    type: DIALOG.CLOSE_DIALOG
  }
}

export function confirmDialog() {
  return {
    type: DIALOG.CONFIRM_DIALOG
  }
}

export function cancelDialog() {
  return {
    type: DIALOG.CANCEL_DIALOG
  }
}
