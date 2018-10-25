import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import post from './post';
import dialog from './dialog';

export default combineReducers({
  post,
  dialog,
  form: formReducer
});
