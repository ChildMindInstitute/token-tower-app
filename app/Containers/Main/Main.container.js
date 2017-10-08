import React, { Component } from 'react';

import Main from '../../Components/Main/Main.component';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import navPropTypes from '../../PropTypes/Navigation.propTypes';

class MainContainer extends Component {
  _onPrize = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.TokenTotem.Prize);
  }

  _onCamera = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.TokenTotem.TakePhoto);
  }

  _onToken = () => {
    const { navigate } = this.props.navigation;
    navigate(routeName.Root.Config);
  }

  render() {
    return (
      <Main
        onCameraPress={this._onCamera}
        onTokenPress={this._onToken}
        onPrizePress={this._onPrize}
      />
    );
  }
}

MainContainer.propTypes = {
  ...navPropTypes
};

export default MainContainer;
