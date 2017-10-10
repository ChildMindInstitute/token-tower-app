import { createActions, handleActions } from 'redux-actions';

import api from '../../../Firebase/TokenHistory/TokenHistory.api';

// ------------------------------------
// Action
// ------------------------------------
export const {
  tokenHistoryAdd,
  tokenHistoryInit // GRAPH
} =
  createActions({
    TOKEN_HISTORY_ADD: api.pushNewTokenHistory
  }, 'TOKEN_HISTORY_INIT');

// ------------------------------------
// Reducer
// ------------------------------------
const tokenHistoryInitHandler = (state, { payload }) => ({ ...state, ...payload });

export default handleActions({
  TOKEN_HISTORY_INIT: tokenHistoryInitHandler
}, {});
