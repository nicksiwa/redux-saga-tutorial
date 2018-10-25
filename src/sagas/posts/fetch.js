import { put, call, takeEvery } from 'redux-saga/effects';
import { fetchPostsApi } from '../../services/post';
import { fetchPostsSuccess, fetchPostsFailure } from '../../actions/post';
import { POST } from '../../constants/actionTypes';

function* fetchPostsWoker() {
  try {
    const posts = yield call(fetchPostsApi);
    yield put(fetchPostsSuccess(posts));
  } catch(err) {
    console.error(`FETCH_POSTS_ERROR : ${err}`);
    yield put(fetchPostsFailure(err));
  }
}

export default function* fetchPostsWatcher() {
  yield takeEvery(POST.FETCH_POSTS_PENDING, fetchPostsWoker);
}
