import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, NavigationActions } from 'react-navigation';
import { BackHandler } from 'react-native';
import { Font } from 'expo';

import CustomNav from '../CustomNavigator/CustomNavigator.component';

import navPropTypes from '../../PropTypes/Navigation.propTypes';
import { Resource } from '../../Resources/Fonts';

class RootNavigator extends Component {
  constructor() {
    super();
    this.state = { fontLoaded: false };
  }

  async componentWillMount() {
    await Font.loadAsync(Resource);
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }

  _onBackPress = () => {
    const { dispatch, navigationState: { index } } = this.props;
    if (index === 0) return false;
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { dispatch, navigationState } = this.props;
    const navProps = addNavigationHelpers({ dispatch, state: navigationState });

    return (
      this.state.fontLoaded && <CustomNav navigation={navProps} />
    );
  }
}

RootNavigator.propTypes = {
  ...navPropTypes,
  navigationState: propTypes.object.isRequired
};

const mapStateToProps = state => ({
  navigationState: state.navigation.navigationState
});

export default connect(mapStateToProps)(RootNavigator);
