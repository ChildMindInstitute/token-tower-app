import PropTypes from 'prop-types';

import navPropTypes from '../../PropTypes/Navigation.propTypes';
import formPropTypes from '../../PropTypes/Form.propTypes';

const propTypes = {
  ...navPropTypes,
  ...formPropTypes,
  authentication: PropTypes.func.isRequired,
  authenticated: PropTypes.func.isRequired,
  initProfile: PropTypes.func.isRequired,
  initStack: PropTypes.func.isRequired,
  updateStack: PropTypes.func,
  updateProfile: PropTypes.func,
  tokenStack: PropTypes.object
};

const form = {
  form: 'loginForm'
};

export default {
  propTypes,
  form
};
