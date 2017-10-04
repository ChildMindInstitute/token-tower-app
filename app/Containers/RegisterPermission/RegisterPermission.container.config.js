import navPropTypes from '../../PropTypes/Navigation.propTypes';
import formPropTypes from '../../PropTypes/Form.propTypes';

const propTypes = {
  ...navPropTypes,
  ...formPropTypes
};

const form = {
  form: 'registerPermissionForm',
  initialValues: {
    permission1: true,
    permission2: false,
    permission3: true,
    permission4: true
  }
};

export default {
  propTypes,
  form
};
