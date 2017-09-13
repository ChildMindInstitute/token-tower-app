import { handleActions } from 'redux-actions';

import config from './LoadingMask.config';

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
  Object.assign(...config.map(
    action => ({
      [`${action.toString()}_PENDING`]: startActionHandler,
      [`${action.toString()}_FULFILLED`]: finishActionHandler,
      [`${action.toString()}_REJECTED`]: finishActionHandler
    })
  )),
  initialState
);
