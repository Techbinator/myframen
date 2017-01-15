import {
  IMAGES_CATEGORY_CREATE,
  IMAGES_CATEGORY_UPDATE,
  IMAGES_CATEGORY_DELETE
} from './types';

export const imageCategoryCreate = ({ prop, value }) => {
  return {
    type: IMAGES_CATEGORY_CREATE,
    payload: { prop, value }
  };
};

export const imageCategoryUpdate = ({ prop, value }) => {
  return {
    type: IMAGES_CATEGORY_UPDATE,
    payload: { prop, value }
  };
};

export const imageCategoryDelete = ({ prop, value }) => {
  return {
    type: IMAGES_CATEGORY_DELETE,
    payload: { prop, value }
  };
};
