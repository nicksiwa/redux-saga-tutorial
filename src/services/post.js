import { service } from './config';

export function fetchPostsApi() {
  return service().get('/posts').then(res => res.data);
}

export function createPostApi(data) {
  return service().post('/posts', data).then(res => res.data);
}

export function updatePostApi(data) {
  return service().put(`/posts/${data.id}`, data).then(res => res.data);
}

export function deletePostApi(id) {
  return service().delete(`/posts/${id}`, {id: id}).then(res => res.config.id);
}
