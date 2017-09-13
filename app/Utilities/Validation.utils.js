import _ from 'lodash';

import Constant from './Constant.utils';

export const required = value => (_.isEmpty(value) ? Constant.ERR_MSG.REQUIRED : undefined);

export const maxLength = (value, length) => (value.length > length ? Constant.ERR_MSG.MAX_LENGTH : undefined);
