import { call, put, takeEvery } from 'redux-saga/effects';
import { deletePostApi } from '../../services/post';
import { deletePostSuccess, deletePostFailure } from '../../actions/post';
import { POST } from '../../constants/actionTypes';
import confirmSaga from '../confirmSaga';

function* deletePost(action) {
  const message = `Are you sure you want to delete post No.${action.payload} ?`;
  const dialog = yield call(confirmSaga, message);

  if(dialog.confirm) {
    try {
      const post = yield call(deletePostApi, action.payload);
      yield put(deletePostSuccess(post));
    } catch(err) {
      console.error(`DELETE_POST_ERROR : ${err}`);
      yield put(deletePostFailure(err));
    }
  }
}

export default function* watchDeletePost() {
  yield takeEvery(POST.DELETE_POST_PENDING, deletePost);
}
