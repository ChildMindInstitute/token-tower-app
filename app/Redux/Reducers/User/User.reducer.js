import { createActions, handleActions } from 'redux-actions';

import api from '../../../Firebase/Users/Users.api';

// ------------------------------------
// Action
// ------------------------------------
export const {
  userUpdateBasicProfile,
  userUpdateProfile,
  userUpdatePassword,
  userAuthenticated,
  userInitProfile
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

const userUpdateBasicProfileHandler = (state) => {
  const { displayName, email, photoURL } = api.getCurrentUser();
  return { ...state, displayName, email, photoURL };
};

const userUpdateProfileHandler = (state, { payload }) => ({ ...state, ...payload });

const authenticateSignOutHandler = state => ({
  ...state,
  isAuthenticated: false,
  displayName: undefined,
  email: undefined,
  photoURL: undefined
});

export default handleActions({
  USER_AUTHENTICATED: userAuthenticatedHandler,
  USER_INIT_PROFILE_FULFILLED: userInitProfileHandler,
  USER_UPDATE_BASIC_PROFILE_FULFILLED: userUpdateBasicProfileHandler,
  USER_UPDATE_PROFILE_FULFILLED: userUpdateProfileHandler,
  AUTHENTICATION_SIGN_OUT_FULFILLED: authenticateSignOutHandler
}, { isAuthenticated: false });
