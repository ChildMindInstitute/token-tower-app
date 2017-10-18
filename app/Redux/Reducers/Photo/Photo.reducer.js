import { createActions, handleActions } from 'redux-actions';

import api from '../../../Firebase/Photo/Photo.api';

// ------------------------------------
// Action
// ------------------------------------
export const {
  photoAdd,
  photoInit,
  photoRemove
} =
  createActions({
    PHOTO_ADD: api.addNewPhoto,
    PHOTO_INIT: api.getPhotos,
    PHOTO_REMOVE: api.removePhotoById
  });

// ------------------------------------
// Reducer
// ------------------------------------
const photoInitHandler = (state, { payload }) => ({ ...payload });

export default handleActions({
  PHOTO_INIT_FULFILLED: photoInitHandler
}, {});
