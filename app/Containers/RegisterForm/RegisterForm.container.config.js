import PropTypes from 'prop-types';

import navPropTypes from '../../PropTypes/Navigation.propTypes';
import formPropTypes from '../../PropTypes/Form.propTypes';

const propTypes = {
  ...navPropTypes,
  ...formPropTypes,
  register: PropTypes.func.isRequired,
  sendEmailVerification: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  updateBasicProfile: PropTypes.func.isRequired,
  initProfile: PropTypes.func.isRequired,
  signInWithFb: PropTypes.func.isRequired,
  authenticated: PropTypes.func.isRequired
};

const form = {
  form: 'registerFormForm'
};

export default {
  propTypes,
  form
};
