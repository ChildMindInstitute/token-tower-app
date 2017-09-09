import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { BackHandler } from 'react-native';

import CustomNav from '../CustomNavigator/CustomNavigator.component';

import propTypes from '../NavPropTypes/Navigation.propTypes';

class RootNavigator extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }

  _onBackPress = () => {
    const { dispatch, navigationState } = this.props;
    if (navigationState.index === 0) return false;
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, navigationState } = this.props;
    const navProps = addNavigationHelpers({ dispatch, state: navigationState });

    return (
      <CustomNav navigation={navProps} />
    );
  }
}

RootNavigator.propTypes = propTypes;

const mapStateToProps = state => ({
  navigationState: state.navigation && state.navigation.navigationState
});

export default connect(mapStateToProps)(RootNavigator);
