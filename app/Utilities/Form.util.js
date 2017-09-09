import { topNotificationShowErr } from '../Redux/Reducers/TopNotification/TopNotification.reducer';
import Constant from '../Utilities/Constant.utils';

export const showTopErrNotification = (notify, dispatch) => {
  if (!notify) return;

  dispatch(topNotificationShowErr({ ...notify, alertType: Constant.COMMON.ERR }));
};

export const showTopSuccessNotification = (notify, dispatch) => {
  if (!notify) return;

  dispatch(topNotificationShowErr({ ...notify, alertType: Constant.COMMON.SUCCESS }));
};
