import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
// import { addNavigationHelpers, NavigationActions } from 'react-navigation';
// import { BackHandler } from 'react-native';
import { Font } from 'expo';

import CustomNav from '../CustomNavigator/CustomNavigator.component';

import navPropTypes from '../../PropTypes/Navigation.propTypes';
import { Resource } from '../../Resources/Fonts';
import { fontLoadFinished } from '../../Redux/Reducers/Font/Font.reducer';

class RootNavigator extends Component {
  async componentWillMount() {
    await Font.loadAsync(Resource);
    this.props.dispatch(fontLoadFinished());
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
    const { dispatch, navigationState, isFontLoaded } = this.props;
    const navProps = addNavigationHelpers({ dispatch, state: navigationState });

    return (
      isFontLoaded && <CustomNav navigation={navProps} />
    );
  }
}

RootNavigator.propTypes = {
  ...navPropTypes,
  navigationState: propTypes.object.isRequired,
  isFontLoaded: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  navigationState: state.navigation.navigationState,
  isFontLoaded: state.font.isLoaded
});

export default connect(mapStateToProps)(RootNavigator);
