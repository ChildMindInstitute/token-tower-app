import React from 'react';
import propTypes from 'prop-types';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';

import styles from './LoadingMask.container.styles';
import Constant from '../../Utilities/Constant.utils';

const LoadingMask = ({ loading }) => (
  <Spinner
    visible={loading}
    textStyle={styles.spinerText}
    textContent={Constant.COMMON.SPINNER_MSG}
  />
);

LoadingMask.propTypes = {
  loading: propTypes.bool
};

const mapStateToProps = state => ({
  loading: state.loadingMask.loading
});

export default connect(mapStateToProps)(LoadingMask);
