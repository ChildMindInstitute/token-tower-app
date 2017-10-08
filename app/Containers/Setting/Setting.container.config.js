import navPropTypes from '../../PropTypes/Navigation.propTypes';

const propTypes = {
  ...navPropTypes
};

const form = {
  form: 'settingForm',
  initialValues: {
    canAnimation: true
  }
};

export default {
  propTypes,
  form
};
