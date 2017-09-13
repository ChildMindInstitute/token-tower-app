import { MessageBarManager } from 'react-native-message-bar';
import { Header } from 'react-navigation';
import { Platform } from 'react-native';
import Expo from 'expo';

import Constant from './Constant.utils';

const getHeaderHeight = () => (
  Header.HEIGHT + (Platform.OS === Constant.PLATFORM.IOS ? 0 : Expo.Constants.statusBarHeight)
);

export const registerMsgBar = (instance) => {
  MessageBarManager.registerMessageBar(instance);
};

export const unregisterMsgBar = () => {
  MessageBarManager.unregisterMessageBar();
};

export const showMsgBar = (nextMsg, oldMsg) => {
  if (nextMsg && nextMsg.message && oldMsg !== nextMsg) {
    const viewTopOffset = getHeaderHeight();
    const animationType = 'SlideFromLeft';
    const message = { ...nextMsg, viewTopOffset, animationType };

    MessageBarManager.showAlert(message);
  }
};
