import { createActions, handleActions } from 'redux-actions';

import api from '../../../Firebase/Authenticate/Authenticate.api';

// ------------------------------------
// Action
// ------------------------------------
export const {
  authenticationEmailPassword,
  authenticationFb,
  authenticationGg,
  authenticationCreateNewAccount,
  authenticationForgotPassword,
  authenticationSendEmailVerification,
  authenticationSignOut
} = createActions({
  AUTHENTICATION_EMAIL_PASSWORD: api.signIn,
  AUTHENTICATION_FB: api.signInWithFB,
  AUTHENTICATION_GG: api.signInWithGG,
  AUTHENTICATION_CREATE_NEW_ACCOUNT: api.register,
  AUTHENTICATION_FORGOT_PASSWORD: api.forgotPassword,
  AUTHENTICATION_SEND_EMAIL_VERIFICATION: api.sendEmailVerification,
  AUTHENTICATION_SIGN_OUT: api.signOut
});

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
}, {});
