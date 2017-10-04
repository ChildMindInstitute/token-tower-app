import _ from 'lodash';

import { ERR_MSG } from './Constant.utils';

export const required = value => (_.isEmpty(value) ? ERR_MSG.REQUIRED : undefined);

export const minLength = length => value =>
  (_.isEmpty(value) || value.length < length ? `${ERR_MSG.MIN_LENGTH} ${length}` : undefined);

export const maxLength = length => value =>
  (_.isEmpty(value) || value.length > length ? `${ERR_MSG.MAX_LENGTH} ${length}` : undefined);

export const emailValidation = (value) => {
  if (_.isEmpty(value)) return undefined;
  /* eslint-disable max-len */
  /* eslint-disable no-useless-escape */
  if (!/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{1,1})+([^<>()\.,;:\s@\"]{2,}))$/.test(value)) {
    return ERR_MSG.INVALID_EMAIL;
  }
  return undefined;
};
export const numberValidation = number =>
  ((typeof number === 'number' && !_.isNaN(number)) ? undefined : ERR_MSG.NOT_A_NUMBER);
