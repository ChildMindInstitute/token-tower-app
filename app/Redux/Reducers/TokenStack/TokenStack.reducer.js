import { createActions, handleActions } from 'redux-actions';

import api from '../../../Firebase/TokenStack/TokenStack.api';

// ------------------------------------
// Action
// ------------------------------------
export const {
  tokenStackUpdate,
  tokenStackListenChangeOn,
  tokenStackListenChangeOff,
  tokenStackInit
} =
  createActions({
    TOKEN_STACK_UPDATE: api.updateStack,
    TOKEN_STACK_LISTEN_CHANGE_ON: api.listenOnStackChanged,
    TOKEN_STACK_LISTEN_CHANGE_OFF: api.listenOffStackChanged,
    TOKEN_STACK_INIT: api.getTokenStack
  });

// ------------------------------------
// Reducer
// ------------------------------------

const initTokenStackHandler = (state, { payload }) => ({
  ...payload,
  tokens: (payload && payload.tokens) || []
});

export default handleActions({
  TOKEN_STACK_INIT_FULFILLED: initTokenStackHandler
}, { tokens: [] });
