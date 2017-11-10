import { createActions, handleActions } from 'redux-actions';

import api from '../../../Firebase/TokenStack/TokenStack.api';

// ------------------------------------
// Action
// ------------------------------------
export const {
  tokenStackUpdate,
  tokenStackListenAddOn,
  tokenStackListenAddOff,
  tokenStackListenChangeOn,
  tokenStackListenChangeOff,
  tokenStackListenRemoveOn,
  tokenStackListenRemoveOff,
  tokenStackInit
} =
  createActions({
    TOKEN_STACK_UPDATE: api.updateStack,
    TOKEN_STACK_LISTEN_ADD_ON: api.listenOnStackAdded,
    TOKEN_STACK_LISTEN_ADD_OFF: api.listenOffStackAdded,
    TOKEN_STACK_LISTEN_CHANGE_ON: api.listenOnStackChanged,
    TOKEN_STACK_LISTEN_CHANGE_OFF: api.listenOffStackChanged,
    TOKEN_STACK_LISTEN_REMOVE_ON: api.listenOnStackRemoved,
    TOKEN_STACK_LISTEN_REMOVE_OFF: api.listenOffStackRemoved,
    TOKEN_STACK_INIT: api.getTokenStack
  });

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { tokens: [] };

const initTokenStackHandler = (state, { payload }) => ({
  ...payload,
  tokens: (payload && payload.tokens) || []
});

const authenticateSignOutHandler = () => initialState;

export default handleActions({
  TOKEN_STACK_INIT_FULFILLED: initTokenStackHandler,
  AUTHENTICATION_SIGN_OUT_FULFILLED: authenticateSignOutHandler
}, initialState);
