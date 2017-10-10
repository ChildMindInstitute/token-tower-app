import PropTypes from 'prop-types';

import formPropTypes from '../../PropTypes/Form.propTypes';
import navPropTypes from '../../PropTypes/Navigation.propTypes';

const propTypes = {
  ...formPropTypes,
  ...navPropTypes,
  isChild: PropTypes.bool.isRequired,
  initialValues: PropTypes.object
  // updateProfile: PropTypes.func.isRequired,
  // initProfile: PropTypes.func.isRequired,
  // user: PropTypes.object.isRequired,
};

const form = {
  form: 'mainForm'
};

export default {
  propTypes,
  form
};
