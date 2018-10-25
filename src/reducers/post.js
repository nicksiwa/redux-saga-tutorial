import { POST } from '../constants/actionTypes';

const initState = []

export default function post(state=initState, action) {
  switch(action.type) {
    case POST.FETCH_POSTS_PENDING:
    case POST.CREATE_POST_PENDING:
      return { ...state, loading: true }
    case POST.FETCH_POSTS_SUCCESS:
      return { data: action.payload, loading: false }
    case POST.CREATE_POST_SUCCESS:
      return [ ...state.data, action.payload ]
    case POST.DELETE_POST_SUCCESS:
      return { data: state.data.filter(post => post.id !== action.payload), loading: false }
    case POST.FETCH_POSTS_FAILURE:
    case POST.CREATE_POST_FAILURE:
    case POST.DELETE_POST_FAILURE:
      return { message: action.message, loading: false }
    default:
      return state;
  }
}
