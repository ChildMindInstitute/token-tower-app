import { topNotificationAdd } from '../Redux/Reducers/TopNotification/TopNotification.reducer';
import { COMMON } from './Constant.utils';

export const showTopErrNotification = (notify, dispatch) => {
  if (!notify) return;

  dispatch(topNotificationAdd({ ...notify, alertType: COMMON.ERR }));
};

export const showTopSuccessNotification = (notify, dispatch) => {
  if (!notify) return;

  dispatch(topNotificationAdd({ ...notify, alertType: COMMON.SUCCESS }));
};

export const showTopInfoNotification = (notify, dispatch) => {
  if (!notify) return;

  dispatch(topNotificationAdd({ ...notify, alertType: COMMON.INFO }));
};

export const showTopWarningNotification = (notify, dispatch) => {
  if (!notify) return;

  dispatch(topNotificationAdd({ ...notify, alertType: COMMON.WARNING }));
};
