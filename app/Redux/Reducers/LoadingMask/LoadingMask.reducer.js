import { handleActions, createActions } from 'redux-actions';

import config from './LoadingMask.config';


// ------------------------------------
// Action
// ------------------------------------
export const { loadingMaskStart, loadingMaskEnd } = createActions({
}, 'LOADING_MASK_START', 'LOADING_MASK_END');

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loadingCounter: 0,
  isLoading: false
};

const startActionHandler = (state) => {
  const loadingCounter = state.loadingCounter + 1;
  const isLoading = true;

  return { ...state, loadingCounter, isLoading };
};

const finishActionHandler = (state) => {
  let loadingCounter = 0;

  if (state.loadingCounter > 0) loadingCounter = state.loadingCounter - 1;

  const isLoading = loadingCounter !== 0;

  return { ...state, loadingCounter, isLoading };
};

export default handleActions(
  {
    ...Object.assign(...config.map(
      action => ({
        [`${action.toString()}_PENDING`]: startActionHandler,
        [`${action.toString()}_FULFILLED`]: finishActionHandler,
        [`${action.toString()}_REJECTED`]: finishActionHandler
      })
    )),
    LOADING_MASK_START: startActionHandler,
    LOADING_MASK_END: finishActionHandler
  },
  initialState
);
