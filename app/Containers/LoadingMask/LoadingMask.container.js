import React from 'react';
import propTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';

import styles from './LoadingMask.container.styles';
import Constant from '../../Utilities/Constant.utils';

const LoadingMaskContainer = ({ loading }) => (
  <Spinner
    visible={loading}
    textStyle={styles.spinerText}
    textContent={Constant.COMMON.SPINNER_MSG}
  />
);

LoadingMaskContainer.propTypes = {
  loading: propTypes.bool
};

const mapStateToProps = state => ({
  loading: state.loadingMask.loading
});

export default connect(mapStateToProps)(LoadingMaskContainer);
