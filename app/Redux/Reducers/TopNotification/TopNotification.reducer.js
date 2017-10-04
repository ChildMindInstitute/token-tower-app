import { createActions, handleActions } from 'redux-actions';

// ------------------------------------
// Action
// ------------------------------------
export const { topNotificationAdd } = createActions({}, 'TOP_NOTIFICATION_ADD');

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  TOP_NOTIFICATION_ADD: (state, { payload }) => ({ ...state, ...payload })
}, {});
