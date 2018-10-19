import { POST } from '../constants/actionTypes';

export function fetchPostsPending() {
  return {
    type: POST.FETCH_POSTS_PENDING
  }
}

export function fetchPostsSuccess(posts) {
  return {
    type: POST.FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

export function fetchPostsFailure(err) {
  return {
    type: POST.FETCH_POSTS_FAILURE,
    message: err
  }
}
