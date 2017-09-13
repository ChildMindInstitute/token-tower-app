import { createActions, handleActions } from 'redux-actions';

import api from '../../../Api/api';

// ------------------------------------
// Action
// ------------------------------------
export const { authenticationEmailPassword } = createActions({
  AUTHENTICATION_EMAIL_PASSWORD: api.authenicate
});

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
}, {});
