import { createActions, handleActions } from 'redux-actions';

import api from '../../../Firebase/Photo/Photo.api';
import { insertPhoto, deletePhotos } from '../../../Utilities/Photos.utils';

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
  deletePhotos();
  if (payload) {
    photos = Object.keys(payload);
    photos.forEach(id => insertPhoto({ id, base64: payload[id].tokenImgUrl }));
  }

  return photos || [];
};

export default handleActions({
  PHOTO_INIT_FULFILLED: photoInitHandler
}, []);
