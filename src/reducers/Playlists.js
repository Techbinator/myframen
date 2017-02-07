import _ from 'lodash';

import {
  PLAYLISTS_CREATE,
  PLAYLISTS_UPDATE,
  PLAYLISTS_DELETE,
  PLAYLISTS_ADD_PHOTO,
} from '../actions/types';

const INITIAL_STATE = {
  playlists: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PLAYLISTS_CREATE:
      return {
        ...state,
        playlists: [
          ...state.playlists,
          action.payload.value
        ]
      };
      return INITIAL_STATE;
    case PLAYLISTS_UPDATE:
      return {
        ...state,
        [action.payload.prop]: action.payload.value
      };

    case PLAYLISTS_ADD_PHOTO:

    const playlists = state.playlists.map((playlist) => {
      playlist.id === action.payload.prop && playlist.photos.unshift(action.payload.value)
      return playlist
    });
    return {
      ...state,
      playlist: playlists
    }

    case PLAYLISTS_DELETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
