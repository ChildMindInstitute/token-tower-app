import { reducer } from 'redux-form';

import navigation from './Navigation/Navigation.reducer';
import topNotification from './TopNotification/TopNotification.reducer';

export default {
  form: reducer,
  navigation,
  topNotification
};
