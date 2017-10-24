import { reducer } from 'redux-form';

import navigation from './Navigation/Navigation.reducer';
import topNotification from './TopNotification/TopNotification.reducer';
import authentication from './Authentication/Authentication.reducer';
import loadingMask from './LoadingMask/LoadingMask.reducer';
import sideMenu from './SideMenu/SideMenu.reducer';
import user from './User/User.reducer';
import tokenHistory from './TokenHistory/TokenHistory.reducer';
import tokenStack from './TokenStack/TokenStack.reducer';
import photo from './Photo/Photo.reducer';

export default {
  form: reducer,
  navigation,
  topNotification,
  authentication,
  loadingMask,
  sideMenu,
  user,
  tokenHistory,
  tokenStack,
  photo
};
