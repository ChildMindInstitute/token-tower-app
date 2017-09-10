import { MessageBarManager } from 'react-native-message-bar';

export const registerMsgBar = (instance) => {
  MessageBarManager.registerMessageBar(instance);
};

export const unregisterMsgBar = () => {
  MessageBarManager.unregisterMessageBar();
};

export const showMsgBar = (msg) => {
  MessageBarManager.showAlert(msg);
};
