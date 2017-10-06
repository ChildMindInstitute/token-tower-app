import { createActions, handleActions } from 'redux-actions';

import api from '../../../Api/api';

// ------------------------------------
// Action
// ------------------------------------
export const { userUpdateProfile, userUpdatePassword, userAuthenticated } = createActions({
  USER_UPDATE_PROFILE: api.updateUserProfile,
  USER_UPDATE_PASSWORD: api.updatePassword
}, 'USER_AUTHENTICATED');

// ------------------------------------
// Reducer
// ------------------------------------
const userAuthenticatedHandler = state => ({ ...state, isAuthenticated: true });

const userUpdateHandler = (state) => {
  const { displayName, email, photoURL } = api.getCurrentUser();
  return { ...state, displayName, email, photoURL };
};

export default handleActions({
  USER_UPDATE_PROFILE_FULFILLED: userUpdateHandler,
  USER_AUTHENTICATED: userAuthenticatedHandler
}, { isAuthenticated: false });
