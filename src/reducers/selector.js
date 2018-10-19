export function getPostById(state, id) {
  return state && state.find(post => post.id === parseInt(id))
}
