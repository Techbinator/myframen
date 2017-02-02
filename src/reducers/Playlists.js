import {
  PLAYLISTS_CREATE,
  PLAYLISTS_UPDATE,
  PLAYLISTS_DELETE,
} from '../actions/types';

const INITIAL_STATE = {
  id: 1,
  name:'',
  timeSlides: 2,
  sliderType: 'random',
  images: [],
  status: 'enabled'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYLISTS_CREATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case PLAYLISTS_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };
    case PLAYLISTS_DELETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
