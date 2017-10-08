import { createActions, handleActions } from 'redux-actions';

import api from '../../../Firebase/User/User.api';

import { USER_ROLE } from '../../../Utilities/Constant.utils';

// ------------------------------------
// Action
// ------------------------------------
export const {
  userUpdateBasicProfile,
  userUpdateProfile,
  userUpdatePassword,
  userInitProfile,
  userAuthenticated,
  userActRoleAsParent,
  userActRoleAsChild
} =
  createActions({
    USER_UPDATE_BASIC_PROFILE: api.updateUserBasicProfile,
    USER_UPDATE_PROFILE: api.updateUserProfile,
    USER_UPDATE_PASSWORD: api.updatePassword,
    USER_INIT_PROFILE: api.getUserById
  }, 'USER_AUTHENTICATED', 'USER_ACT_ROLE_AS_PARENT', 'USER_ACT_ROLE_AS_CHILD');

// ------------------------------------
// Reducer
// ------------------------------------
const userAuthenticatedHandler = state => ({ ...state, isAuthenticated: true });

const userActRoleAsParentHandler = state => ({ ...state, role: USER_ROLE.PARENT });

const userActRoleAsChildHandler = state => ({ ...state, role: USER_ROLE.CHILD });

const userInitProfileHandler = (state, { payload }) => {
  const { displayName, email, photoURL } = api.getCurrentUser();
  return { ...state, displayName, email, photoURL, ...payload };
};

const authenticateSignOutHandler = () => ({
  isAuthenticated: false
});

export default handleActions({
  USER_AUTHENTICATED: userAuthenticatedHandler,
  USER_ACT_ROLE_AS_PARENT: userActRoleAsParentHandler,
  USER_ACT_ROLE_AS_CHILD: userActRoleAsChildHandler,
  USER_INIT_PROFILE_FULFILLED: userInitProfileHandler,
  AUTHENTICATION_SIGN_OUT_FULFILLED: authenticateSignOutHandler
}, { isAuthenticated: false });
