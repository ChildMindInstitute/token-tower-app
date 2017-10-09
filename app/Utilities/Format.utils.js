import _ from 'lodash';

export const strToNumber = (str) => {
  const num = _.toNumber(str);
  return _.isNaN(num) ? 0 : num;
};

export const toString = v => _.toString(v);
