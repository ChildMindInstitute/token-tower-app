import PropTypes from 'prop-types';

import formPropTypes from '../../PropTypes/Form.propTypes';
import navPropTypes from '../../PropTypes/Navigation.propTypes';

const propTypes = {
  ...formPropTypes,
  ...navPropTypes,
  updateProfile: PropTypes.func.isRequired,
  initProfile: PropTypes.func.isRequired,
  updateStack: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  tokenStack: PropTypes.object,
  user: PropTypes.object.isRequired
};

const form = {
  form: 'settingForm'
};

export default {
  propTypes,
  form
};
