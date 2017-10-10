import PropTypes from 'prop-types';

import navPropTypes from '../../PropTypes/Navigation.propTypes';
import formPropTypes from '../../PropTypes/Form.propTypes';

const propTypes = {
  ...navPropTypes,
  ...formPropTypes,
  user: PropTypes.object.isRequired,
  updatePassword: PropTypes.func.isRequired,
  updateBasicProfile: PropTypes.func.isRequired,
  updateProfile: PropTypes.func.isRequired,
  userInitProfile: PropTypes.func.isRequired
};

const form = {
  form: 'SetInfoForm'
};

export default {
  propTypes,
  form
};
