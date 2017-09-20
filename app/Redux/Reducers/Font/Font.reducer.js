import { createActions, handleActions } from 'redux-actions';

// ------------------------------------
// Action
// ------------------------------------
export const { fontLoadFinished } = createActions({
}, 'FONT_LOAD_FINISHED');

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isLoaded: false
};

const handleFontLoaded = state => ({
  ...state,
  isLoaded: true
});

export default handleActions({
  FONT_LOAD_FINISHED: handleFontLoaded
}, initialState);
