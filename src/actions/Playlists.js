import {
  PLAYLISTS_CREATE,
  PLAYLISTS_UPDATE,
  PLAYLISTS_DELETE,
  PLAYLISTS_ADD_PHOTO
} from './types';

export const playlistCreate = ( prop, value) => {
  return {
    type: PLAYLISTS_CREATE,
    payload: { prop, value }
  };
};

export const playlistUpdate = ({ prop, value }) => {
  return {
    type: PLAYLISTS_UPDATE,
    payload: { prop, value }
  };
};

export const playlistDelete = ({ prop, value }) => {
  return {
    type: PLAYLISTS_DELETE,
    payload: { prop, value }
  };
};

export const playlistAddPhoto = (prop, value) => {
  return {
    type: PLAYLISTS_ADD_PHOTO,
    payload: { prop, value }
  };
};
