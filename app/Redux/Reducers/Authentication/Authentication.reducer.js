import { createActions, handleActions } from 'redux-actions';

import api from '../../../Api/api';

// ------------------------------------
// Action
// ------------------------------------
export const { authenticationEmailPassword, authenticationCreateNewAccount } = createActions({
  AUTHENTICATION_EMAIL_PASSWORD: api.authenicate,
  AUTHENTICATION_CREATE_NEW_ACCOUNT: api.register
});

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
}, {});
