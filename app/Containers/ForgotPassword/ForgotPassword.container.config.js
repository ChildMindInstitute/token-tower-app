import PropTypes from 'prop-types';

import navPropTypes from '../../PropTypes/Navigation.propTypes';
import formPropTypes from '../../PropTypes/Form.propTypes';

const propTypes = {
  ...navPropTypes,
  ...formPropTypes,
  forgotPassword: PropTypes.func.isRequired
};

const form = {
  form: 'forgotPasswordForm'
};

export default {
  propTypes,
  form
};
