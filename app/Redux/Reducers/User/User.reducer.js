import { createActions, handleActions } from 'redux-actions';

import api from '../../../Api/api';

// ------------------------------------
// Action
// ------------------------------------
export const { userUpdateProfile, userUpdatePassword } = createActions({
  USER_UPDATE_PROFILE: api.updateUserProfile,
  USER_UPDATE_PASSWORD: api.updatePassword
});

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  USER_UPDATE_PROFILE_FULFILLED: (state) => {
    const { displayName, email, photoURL } = api.getCurrentUser();
    return { ...state, displayName, email, photoURL };
  }
}, {});
