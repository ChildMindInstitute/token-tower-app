import navPropTypes from '../../PropTypes/Navigation.propTypes';
import formPropTypes from '../../PropTypes/Form.propTypes';

const propTypes = {
  ...navPropTypes,
  ...formPropTypes
};

const form = {
  form: 'registerFormForm'
};

export default {
  propTypes,
  form
};
