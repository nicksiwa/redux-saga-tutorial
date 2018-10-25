import { DIALOG } from '../constants/actionTypes';

const initState = {
  open: false,
  message: ""
}

export default function dialog(state=initState, action) {
  switch(action.type) {
    case DIALOG.OPEN_DIALOG:
      return { open: true, message: action.message };
    case DIALOG.CLOSE_DIALOG:
      return { open: false };
    default:
      return state;
  }
}
