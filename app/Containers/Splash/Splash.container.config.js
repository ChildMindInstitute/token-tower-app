import PropTypes from 'prop-types';

import navPropTypes from '../../PropTypes/Navigation.propTypes';

const propTypes = {
  ...navPropTypes,
  isHaveChild: PropTypes.bool.isRequired,
  isChild: PropTypes.bool.isRequired,
  childTokensEarned: PropTypes.number,
  parentTokensEarned: PropTypes.number,
  tokenStack: PropTypes.object,
  prizes: PropTypes.arrayOf(PropTypes.object)
};

export default {
  propTypes
};
