import { createActions, handleActions } from 'redux-actions';

import api from '../../../Firebase/Photo/Photo.api';

// ------------------------------------
// Action
// ------------------------------------
export const {
  photoAdd,
  photoInit
} =
  createActions({
    PHOTO_ADD: api.addNewPhoto
  }, 'PHOTO_INIT');

// ------------------------------------
// Reducer
// ------------------------------------
const photoHistoryInitHandler = (state, { payload }) => ({ ...state, ...payload });

export default handleActions({
  PHOTO_INIT: photoHistoryInitHandler
}, {});
