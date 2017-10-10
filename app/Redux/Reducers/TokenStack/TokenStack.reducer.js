import { createActions, handleActions } from 'redux-actions';

import api from '../../../Firebase/TokenStack/TokenStack.api';

// ------------------------------------
// Action
// ------------------------------------
export const {
  tokenStackUpdate
} =
  createActions({
    TOKEN_STACK_UPDATE: api.updateStack
  }, 'TOKEN_STACK_INIT');

// ------------------------------------
// Reducer
// ------------------------------------
const tokenStackInitHandler = (state, { payload }) => ({ ...state, payload });

export default handleActions({
  TOKEN_STACK_INIT: tokenStackInitHandler
}, {});
