import PropTypes from 'prop-types';

import navPropTypes from '../../PropTypes/Navigation.propTypes';

const propTypes = {
  ...navPropTypes,
  isHaveChild: PropTypes.bool.isRequired
};

export default {
  propTypes
};
