import PropTypes from 'prop-types';

import navPropTypes from '../../PropTypes/Navigation.propTypes';
import formPropTypes from '../../PropTypes/Form.propTypes';

const propTypes = {
  ...navPropTypes,
  ...formPropTypes,
  updatePassword: PropTypes.func.isRequired
};

const form = {
  form: 'updatePasswordForm'
};

export default {
  propTypes,
  form
};
