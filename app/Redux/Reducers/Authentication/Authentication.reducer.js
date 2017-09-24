import { createActions, handleActions } from 'redux-actions';

import api from '../../../Api/api';

// ------------------------------------
// Action
// ------------------------------------
export const {
  authenticationEmailPassword,
  authenticationCreateNewAccount,
  authenticationForgotPassword
} = createActions({
  AUTHENTICATION_EMAIL_PASSWORD: api.authenicate,
  AUTHENTICATION_CREATE_NEW_ACCOUNT: api.register,
  AUTHENTICATION_FORGOT_PASSWORD: api.forgotPassword
});

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
}, {});
