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

export function createPostPending(data) {
  return {
    type: POST.CREATE_POST_PENDING,
    payload: data
  }
}

export function createPostSuccess(post) {
  return {
    type: POST.CREATE_POST_SUCCESS,
    payload: post
  }
}

export function createPostFailure(err) {
  return {
    type: POST.CREATE_POST_FAILURE,
    message: err
  }
}

export function deletePostPending(id) {
  return {
    type: POST.DELETE_POST_PENDING,
    payload: id
  }
}

export function deletePostSuccess(id) {
  return {
    type: POST.DELETE_POST_SUCCESS,
    payload: id
  }
}

export function deletePostFailure(err) {
  return {
    type: POST.DELETE_POST_FAILURE,
    message: err
  }
}
