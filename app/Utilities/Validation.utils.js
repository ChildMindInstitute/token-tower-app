
import _ from 'lodash';

export const required = v => (_.isEmpty(v) ? 'Required' : undefined);

export default {

};
