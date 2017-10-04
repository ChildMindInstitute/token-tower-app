import { createActions, handleActions } from 'redux-actions';

import api from '../../../Api/api';

// ------------------------------------
// Action
// ------------------------------------
export const { userUpdateProfile } = createActions({
  USER_UPDATE_PROFILE: api.updateUserProfile
});

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  USER_UPDATE_PROFILE: (state, { payload }) => ({ ...state, ...payload })
}, {});
