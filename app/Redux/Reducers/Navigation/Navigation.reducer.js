import { createActions, handleActions } from 'redux-actions';
import { NavigationActions } from 'react-navigation';

import Navigator from '../../../Navigation/CustomNavigator/CustomNavigator.component';
import { initialRouteName } from '../../../Navigation/CommonConfigs/Navigation.config';

const initialNavigationState = Navigator.router.getStateForAction(
  NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: initialRouteName })]
  }));

// ------------------------------------
// Action
// ------------------------------------
export const { navigationClear, navigationStore, navigationResetState } = createActions({
}, 'NAVIGATION_CLEAR', 'NAVIGATION_STORE', 'NAVIGATION_RESET_STATE');

// ------------------------------------
// Reducer
// ------------------------------------
const navigateHandler = (state, action) => {
  const navState = state.navigationState;
  const nextNavState = Navigator.router.getStateForAction(action, navState) || navState;

  return { ...state, navigationState: nextNavState };
};

const clearNavigationHandler = state => ({ ...state, navigationAction: undefined });
const storeNavigationHandler = (state, { payload }) => ({ ...state, navigationAction: payload });
const resetNavigationHandler = () => ({ navigationState: initialNavigationState });

export default handleActions({
  NAVIGATION_CLEAR: clearNavigationHandler,
  NAVIGATION_STORE: storeNavigationHandler,
  NAVIGATION_RESET_STATE: resetNavigationHandler,
  [NavigationActions.BACK]: navigateHandler,
  [NavigationActions.INIT]: navigateHandler,
  [NavigationActions.NAVIGATE]: navigateHandler,
  [NavigationActions.RESET]: navigateHandler,
  [NavigationActions.URI]: navigateHandler,
  [NavigationActions.SET_PARAMS]: navigateHandler
}, { navigationState: initialNavigationState });
