import { MessageBarManager } from 'react-native-message-bar';
import { Header } from 'react-navigation';

export const registerMsgBar = (instance) => {
  MessageBarManager.registerMessageBar(instance);
};

export const unregisterMsgBar = () => {
  MessageBarManager.unregisterMessageBar();
};

export const showMsgBar = (nextMsg, oldMsg) => {
  if (nextMsg && nextMsg.message && oldMsg !== nextMsg) {
    const viewTopOffset = Header.HEIGHT;
    const animationType = 'SlideFromLeft';
    const message = { ...nextMsg, viewTopOffset, animationType };

    MessageBarManager.showAlert(message);
  }
};
