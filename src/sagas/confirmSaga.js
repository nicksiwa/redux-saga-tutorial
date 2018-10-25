import { put, race, take } from 'redux-saga/effects';
import { openDialog, closeDialog } from '../actions/dialog';
import { DIALOG } from '../constants/actionTypes';

export default function* confirmSaga(message) {
  yield put(openDialog(message));
  const dialog = yield race({
    confirm: take(DIALOG.CONFIRM_DIALOG),
    cancel: take(DIALOG.CANCEL_DIALOG)
  });
  yield put(closeDialog());
  return dialog;
}
