import { topNotificationAdd } from '../Redux/Reducers/TopNotification/TopNotification.reducer';
import Constant from './Constant.utils';

export const showTopErrNotification = (notify, dispatch) => {
  if (!notify) return;

  dispatch(topNotificationAdd({ ...notify, alertType: Constant.COMMON.ERR }));
};

export const showTopSuccessNotification = (notify, dispatch) => {
  if (!notify) return;

  dispatch(topNotificationAdd({ ...notify, alertType: Constant.COMMON.SUCCESS }));
};
