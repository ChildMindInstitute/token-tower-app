import navPropTypes from '../../PropTypes/Navigation.propTypes';
import formPropTypes from '../../PropTypes/Form.propTypes';

const propTypes = {
  ...navPropTypes,
  ...formPropTypes
};

const form = {
  form: 'registerPermissionForm',
  initialValues: {
    canPerforming: false,
    canStoreData: false,
    canContact: false
  }
};

export default {
  propTypes,
  form
};
