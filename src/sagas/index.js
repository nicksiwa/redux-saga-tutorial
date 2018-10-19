import { all } from 'redux-saga/effects';
import fetchPostsWatcher from './posts/fetch';

export default function* rootSaga() {
  yield all([
    fetchPostsWatcher(),
  ])
}
