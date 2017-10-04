import { createActions, handleActions } from 'redux-actions';

import api from '../../../Api/api';

// ------------------------------------
// Action
// ------------------------------------
export const {
  authenticationEmailPassword,
  authenticationCreateNewAccount,
  authenticationForgotPassword,
  authenticationSendEmailVerification
} = createActions({
  AUTHENTICATION_EMAIL_PASSWORD: api.authenicate,
  AUTHENTICATION_CREATE_NEW_ACCOUNT: api.register,
  AUTHENTICATION_FORGOT_PASSWORD: api.forgotPassword,
  AUTHENTICATION_SEND_EMAIL_VERIFICATION: api.sendEmailVerification
});

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
}, {});
