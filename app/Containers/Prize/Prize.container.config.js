import PropTypes from 'prop-types';

import formPropTypes from '../../PropTypes/Form.propTypes';
import navPropTypes from '../../PropTypes/Navigation.propTypes';

const propTypes = {
  ...formPropTypes,
  ...navPropTypes,
  updateProfile: PropTypes.func.isRequired,
  initProfile: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  user: PropTypes.object.isRequired,
  isParent: PropTypes.bool.isRequired
};

const form = {
  form: 'prizeForm'
};

export default {
  propTypes,
  form
};
