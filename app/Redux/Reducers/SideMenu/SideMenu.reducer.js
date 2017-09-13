import { createActions, handleActions } from 'redux-actions';

// ------------------------------------
// Action
// ------------------------------------
export const { sideMenuToggle, sideMenuOpen, sideMenuClose } = createActions({},
  'SIDE_MENU_TOGGLE', 'SIDE_MENU_OPEN', 'SIDE_MENU_CLOSE');

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isOpened: false
};

const sideMenuToggleHandler = state => ({ ...state, isOpened: !state.isOpened });
const sideMenuOpenHandler = state => ({ ...state, isOpened: true });
const sideMenuCloseHandler = state => ({ ...state, isOpened: false });

export default handleActions({
  SIDE_MENU_TOGGLE: sideMenuToggleHandler,
  SIDE_MENU_OPEN: sideMenuOpenHandler,
  SIDE_MENU_CLOSE: sideMenuCloseHandler
}, initialState);
