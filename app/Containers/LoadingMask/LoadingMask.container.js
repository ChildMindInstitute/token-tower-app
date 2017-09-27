import React from 'react';
import propTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';

import styles from './LoadingMask.container.styles';
import { COMMON } from '../../Utilities/Constant.utils';

const LoadingMaskContainer = ({ isLoading }) => (
  <Spinner
    visible={isLoading}
    textStyle={styles.spinerText}
    textContent={COMMON.SPINNER_MSG}
  />
);

LoadingMaskContainer.propTypes = {
  isLoading: propTypes.bool
};

const mapStateToProps = state => ({
  isLoading: state.loadingMask.isLoading
});

export default connect(mapStateToProps)(LoadingMaskContainer);
