import { createActions, handleActions } from 'redux-actions';

import api from '../../../Firebase/Users/Users.api';

// ------------------------------------
// Action
// ------------------------------------
export const {
  userUpdateBasicProfile,
  userUpdateProfile,
  userUpdatePassword,
  userInitProfile,
  userAuthenticated
} =
  createActions({
    USER_UPDATE_BASIC_PROFILE: api.updateUserBasicProfile,
    USER_UPDATE_PROFILE: api.updateUserProfile,
    USER_UPDATE_PASSWORD: api.updatePassword,
    USER_INIT_PROFILE: api.getUserById
  }, 'USER_AUTHENTICATED');

// ------------------------------------
// Reducer
// ------------------------------------
const userAuthenticatedHandler = state => ({ ...state, isAuthenticated: true });

const userInitProfileHandler = (state, { payload }) => {
  const { displayName, email, photoURL } = api.getCurrentUser();
  return { ...state, displayName, email, photoURL, ...payload };
};

const authenticateSignOutHandler = () => ({
  isAuthenticated: false
});

export default handleActions({
  USER_AUTHENTICATED: userAuthenticatedHandler,
  USER_INIT_PROFILE_FULFILLED: userInitProfileHandler,
  AUTHENTICATION_SIGN_OUT_FULFILLED: authenticateSignOutHandler
}, { isAuthenticated: false });
