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
  ((typeof (number * 1) === 'number' && !_.isNaN((number * 1))) ? undefined : ERR_MSG.NOT_A_NUMBER);

export const greaterThanZero = (number) => {
  const isNumber = !numberValidation(number);
  return (isNumber && number > 0) ? undefined : ERR_MSG.GREATER_THAN_ZERO;
};
export const smallerThanAThousand = (number) => {
  const isNumber = !numberValidation(number);
  return (isNumber && number < 1000) ? undefined : ERR_MSG.SMALLER_THAN_A_THOUSAND;
};
