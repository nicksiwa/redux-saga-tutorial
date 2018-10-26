import { all } from 'redux-saga/effects';
import fetchPostsWatcher from './posts/fetch';
import createPostWatcher from './posts/create';
import deletePostWatcher from './posts/delete';
import updatePostWatcher from './posts/update';

export default function* rootSaga() {
  yield all([
    fetchPostsWatcher(),
    createPostWatcher(),
    deletePostWatcher(),
    updatePostWatcher()
  ])
}
