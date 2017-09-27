import PropTypes from 'prop-types';

import navPropTypes from '../../PropTypes/Navigation.propTypes';
import formPropTypes from '../../PropTypes/Form.propTypes';

const propTypes = {
  ...navPropTypes,
  ...formPropTypes,
  register: PropTypes.func.isRequired
};

const form = {
  form: 'registerFormForm'
};

export default {
  propTypes,
  form
};