import PropTypes from 'prop-types';

const propTypes = {
  onCameraPress: PropTypes.func,
  onTokenPress: PropTypes.func,
  onPrizePress: PropTypes.func,
  onMinusPress: PropTypes.func,
  onPlusPress: PropTypes.func,
  token: PropTypes.node,
  cameraStyle: PropTypes.object,
  minusIconColor: PropTypes.string,
  tokenStyle: PropTypes.object,
  plusIconColor: PropTypes.string,
  presentStyle: PropTypes.object
};

export default {
  propTypes
};
