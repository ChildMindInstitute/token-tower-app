import moment from 'moment';

import { REPLENISH_TOKEN_TYPE } from '../Utilities/Constant.utils';

export const getDailyRefresh = () => moment().add(1, 'day').startOf('day').format();

export const getWeeklyRefresh = () => moment().add(1, 'week').startOf('isoWeek').format();

export const getMonthlyRefresh = () => moment().add(1, 'month').startOf('month').format();

export const getNextRefreshTime = (replenishType) => {
  if (replenishType === REPLENISH_TOKEN_TYPE.WEEKLY) return getWeeklyRefresh();
  else if (replenishType === REPLENISH_TOKEN_TYPE.MONTHLY) return getMonthlyRefresh();
  return getDailyRefresh();
};

export const isRefreshTime = nextRefreshTime => moment().isAfter(moment(nextRefreshTime));
