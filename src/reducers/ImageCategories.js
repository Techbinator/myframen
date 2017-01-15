import {
  IMAGES_CATEGORY_CREATE,
  IMAGES_CATEGORY_UPDATE,
  IMAGES_CATEGORY_DELETE,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  description: '',
  images: [],
  status: 'enabled'
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case IMAGES_CATEGORY_CREATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case IMAGES_CATEGORY_UPDATE:
      return INITIAL_STATE;
    case IMAGES_CATEGORY_DELETE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
