import { Platform } from 'react-native';

import { PLATFORM } from './Constant.utils';

export const isAndroid = () => PLATFORM.ANDROID === Platform.OS;

export const isIos = () => PLATFORM.IOS === Platform.OS;
