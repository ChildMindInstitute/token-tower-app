import { Platform } from 'react-native';
import Expo from 'expo';

import Constant from '../../Utilities/Constant.utils';

export default {
  container: {
    flex: 1,
    paddingTop: Platform.OS === Constant.PLATFORM.IOS ? 0 : Expo.Constants.statusBarHeight
  }
};
