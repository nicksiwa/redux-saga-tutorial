import { POST } from '../constants/actionTypes';

const initState = []

export default function post(state=initState, action) {
  switch(action.type) {
    case POST.FETCH_POSTS_PENDING:
      return { loading: true }
    case POST.FETCH_POSTS_SUCCESS:
      return { data: action.payload, loading: false }
    case POST.FETCH_POSTS_FAILURE:
      return { message: action.message, loading: false }
    default:
      return state;
  }
}
