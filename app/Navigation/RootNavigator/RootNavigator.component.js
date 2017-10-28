import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import { Font, SecureStore } from 'expo';
// import { addNavigationHelpers, NavigationActions } from 'react-navigation';
// import { BackHandler } from 'react-native';

import CustomNav from '../CustomNavigator/CustomNavigator.component';

import authApi from '../../Firebase/Authenticate/Authenticate.api';
import { navigationResetState } from '../../Redux/Reducers/Navigation/Navigation.reducer';
import {
  authenticationSignOut, authenticationResetState
} from '../../Redux/Reducers/Authentication/Authentication.reducer';

import navPropTypes from '../../PropTypes/Navigation.propTypes';
import { Resource } from '../../Resources/Fonts';

class RootNavigator extends Component {
  state = { isFontLoaded: null }

  async componentWillMount() {
    await Font.loadAsync(Resource);
    this.setState({ isFontLoaded: true });
  }

  componentDidMount() {
    authApi.onAuthStateChanged(this._onAuthStateChangedHandler);
  }

  componentDidUpdate() {
    const { shouldLogout, dispatch, isAuthenticated } = this.props;
    if (shouldLogout && isAuthenticated) {
      dispatch(authenticationResetState());
      dispatch(authenticationSignOut());
    }
  }

  _onAuthStateChangedHandler = (user) => {
    if (user) return;
    const { dispatch } = this.props;
    dispatch(navigationResetState());
    SecureStore.deleteItemAsync('shouldShowCongrat');
  }

  // NOTE: DISABLE ANDROID BACK BUTTON for now

  // componentDidMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  // }

  // _onBackPress = () => {
  //   const { dispatch, navigationState: { index } } = this.props;
  //   if (index === 0) return false;
  //   dispatch(NavigationActions.back());
  //   return true;
  // };

  render() {
    const { dispatch, navigationState } = this.props;
    const { isFontLoaded } = this.state;
    const navProps = addNavigationHelpers({ dispatch, state: navigationState });

    return (
      isFontLoaded && <CustomNav navigation={navProps} />
    );
  }
}

RootNavigator.propTypes = {
  ...navPropTypes,
  navigationState: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  navigationState: state.navigation.navigationState,
  isAuthenticated: state.user.isAuthenticated,
  shouldLogout: state.authentication.shouldLogout
});

export default connect(mapStateToProps)(RootNavigator);
