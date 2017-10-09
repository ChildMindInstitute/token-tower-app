import PropTypes from 'prop-types';

import navPropTypes from '../../PropTypes/Navigation.propTypes';

const propTypes = {
  ...navPropTypes,
  updateProfile: PropTypes.func.isRequired,
  initProfile: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  user: PropTypes.object.isRequired
};

const form = {
  form: 'settingForm'
};

export default {
  propTypes,
  form
};
