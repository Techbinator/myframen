import {
  LAYOUT_CREATE,
  LAYOUT_UPDATE,
  LAYOUT_DELETE
} from './types';

export const layoutCreate = ({ prop, value }) => {
  return {
    type: LAYOUT_CREATE,
    payload: { prop, value }
  };
};

export const layoutUpdate = ({ prop, value }) => {
  return {
    type: LAYOUT_UPDATE,
    payload: { prop, value }
  };
};

export const layoutDelete = ({ prop, value }) => {
  return {
    type: LAYOUT_DELETE,
    payload: { prop, value }
  };
};
