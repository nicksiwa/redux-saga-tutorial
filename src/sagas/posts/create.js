import { call, put, takeEvery } from 'redux-saga/effects';
import { createPostApi } from '../../services/post';
import { createPostSuccess, createPostFailure } from '../../actions/post';
import { POST } from '../../constants/actionTypes';
import history from '../../services/history';

function* createPost(action) {
  try {
    const post = yield call(createPostApi, action.payload);
    yield put(createPostSuccess(post));
    yield call(history.push, '/post');
  } catch(err) {
    console.err(`CREATE_POST_ERROR : ${err}`);
    yield put(createPostFailure(err));
  }
}

export default function* watchCreatePost() {
  yield takeEvery(POST.CREATE_POST_PENDING, createPost);
}
