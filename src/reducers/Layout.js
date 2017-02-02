import {
  LAYOUT_CREATE,
  LAYOUT_UPDATE,
  LAYOUT_DELETE,
} from '../actions/types';

const INITIAL_STATE = {
  show_playlist_save: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LAYOUT_CREATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case LAYOUT_UPDATE:
      return { ...state, action.payload.prop: action.payload.value };
    case LAYOUT_DELETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
