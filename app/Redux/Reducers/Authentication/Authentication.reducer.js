import { createActions, handleActions } from 'redux-actions';
import { REHYDRATE } from 'redux-persist/lib/constants';

import api from '../../../Firebase/Authenticate/Authenticate.api';
import { isRefreshTime } from '../../../Utilities/Time.utils';

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
  authenticationSignOut,
  authenticationResetState
} = createActions({
  AUTHENTICATION_EMAIL_PASSWORD: api.signIn,
  AUTHENTICATION_FB: api.signInWithFB,
  AUTHENTICATION_GG: api.signInWithGG,
  AUTHENTICATION_CREATE_NEW_ACCOUNT: api.register,
  AUTHENTICATION_FORGOT_PASSWORD: api.forgotPassword,
  AUTHENTICATION_SEND_EMAIL_VERIFICATION: api.sendEmailVerification,
  AUTHENTICATION_SIGN_OUT: api.signOut
}, 'AUTHENTICATION_RESET_STATE');

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  shouldLogout: false
};

const resetState = () => initialState;

export default handleActions({
  [REHYDRATE]: (state, { payload: { tokenStack: { nextRefreshTime } } }) => ({
    shouldLogout: isRefreshTime(nextRefreshTime)
  }),
  AUTHENTICATION_RESET_STATE: resetState
}, initialState);
