import { Platform } from 'react-native';

import Constant from './Constant.utils';

export const isAndroid = () => Constant.PLATFORM.ANDROID === Platform.OS;

export const isIos = () => Constant.PLATFORM.IOS === Platform.OS;
