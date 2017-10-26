import { createActions, handleActions } from 'redux-actions';

import api from '../../../Firebase/Photo/Photo.api';
import { insertPhoto, deletePhotoById } from '../../../Utilities/Photos.utils';

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
const photoInitHandler = (state, { payload }) => {
  let photos;
  if (payload) {
    photos = Object.keys(payload);
    photos.forEach(id => insertPhoto({ id, base64: payload[id].tokenImgUrl }));
  }

  return photos || [];
};

const photoAddHandler = (state, { payload: { id, base64 } }) => {
  insertPhoto({ id, base64 });
  return [...state, id];
};

const photoRemoveHandler = (state, { payload: id }) => {
  deletePhotoById(id);
  state.splice(state.indexOf(id), 1);
  return [...state];
};

export default handleActions({
  PHOTO_INIT_FULFILLED: photoInitHandler,
  PHOTO_ADD_FULFILLED: photoAddHandler,
  PHOTO_REMOVE_FULFILLED: photoRemoveHandler
}, []);
