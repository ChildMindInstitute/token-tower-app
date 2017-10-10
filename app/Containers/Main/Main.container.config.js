import PropTypes from 'prop-types';

import formPropTypes from '../../PropTypes/Form.propTypes';
import navPropTypes from '../../PropTypes/Navigation.propTypes';

const propTypes = {
  ...formPropTypes,
  ...navPropTypes,
  isChild: PropTypes.bool.isRequired,
  initialValues: PropTypes.object,
  user: PropTypes.object,
  tokenStack: PropTypes.object,
  subscribeStackChanged: PropTypes.func,
  unsubscribeStackChanged: PropTypes.func,
  updateStack: PropTypes.func,
  initStack: PropTypes.func,
  addHistory: PropTypes.func
};

const form = {
  form: 'mainForm',
  enableReinitialize: true
};

export default {
  propTypes,
  form
};
