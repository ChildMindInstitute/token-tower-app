import { reducer } from 'redux-form';

import navigation from './Navigation/Navigation.reducer';
import topNotification from './TopNotification/TopNotification.reducer';
import authentication from './Authentication/Authentication.reducer';
import loadingMask from './LoadingMask/LoadingMask.reducer';
import sideMenu from './SideMenu/SideMenu.reducer';

export default {
  form: reducer,
  navigation,
  topNotification,
  authentication,
  loadingMask,
  sideMenu
};
