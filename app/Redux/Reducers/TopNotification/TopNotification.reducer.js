import { createActions, handleActions } from 'redux-actions';

// ------------------------------------
// Action
// ------------------------------------
export const { topNotificationAdd } = createActions({}, 'TOP_NOTIFICATION_ADD');

// ------------------------------------
// Reducer
// ------------------------------------
const topNotificationAddHandler = (state, { payload }) => ({ ...state, ...payload });

export default handleActions({
  TOP_NOTIFICATION_ADD: topNotificationAddHandler
}, {});
