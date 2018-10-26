import { call, put, takeEvery, take } from 'redux-saga/effects';
import { updatePostApi } from '../../services/post';
import { POST } from '../../constants/actionTypes';
import { updatePostSuccess, updatePostFailure } from '../../actions/post';
import history from '../../services/history';

function* updatePost(action) {
  try {
    yield call(history.push, `/post/edit/${action.payload}`);
    const data = yield take(POST.UPDATE_POST_SUBMITTING);
    const post = yield call(updatePostApi, data.payload);
    yield put(updatePostSuccess(post));
    yield call(history.push, '/post');
  } catch(err) {
    console.error(`UPDATE_POST_ERROR : ${err}`);
    yield put(updatePostFailure(err));
  }
}

export default function* watchUpdatePost() {
  yield takeEvery(POST.UPDATE_POST_PENDING, updatePost);
}
