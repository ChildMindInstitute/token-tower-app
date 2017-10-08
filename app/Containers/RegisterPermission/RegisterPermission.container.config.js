import navPropTypes from '../../PropTypes/Navigation.propTypes';
import formPropTypes from '../../PropTypes/Form.propTypes';

const propTypes = {
  ...navPropTypes,
  ...formPropTypes
};

const form = {
  form: 'registerPermissionForm',
  initialValues: {
    permission1: false,
    permission2: false,
    permission3: false
  }
};

export default {
  propTypes,
  form
};
