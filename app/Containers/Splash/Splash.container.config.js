import PropTypes from 'prop-types';

import navPropTypes from '../../PropTypes/Navigation.propTypes';

const propTypes = {
  ...navPropTypes,
  isHaveChild: PropTypes.bool.isRequired,
  isChild: PropTypes.bool.isRequired,
  tokensEarned: PropTypes.number.isRequired,
  prizes: PropTypes.arrayOf(PropTypes.object)
};

export default {
  propTypes
};
