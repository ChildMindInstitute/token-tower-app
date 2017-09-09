import { createActions, handleActions } from 'redux-actions';

// ------------------------------------
// Action
// ------------------------------------
export const { topNotificationShowErr } = createActions({}, 'TOP_NOTIFICATION_SHOW_ERR');

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  TOP_NOTIFICATION_SHOW_ERR: (state, action) => ({ ...state, ...action.payload })
}, {});
