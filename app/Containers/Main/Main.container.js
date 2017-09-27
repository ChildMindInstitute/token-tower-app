import React, { Component } from 'react';

import Main from '../../Components/Main/Main.component';

import styles from './Main.container.styles';

import navPropTypes from '../../PropTypes/Navigation.propTypes';

class MainContainer extends Component {
  _onPrize = () => {
    const { navigate } = this.props.navigation;
    navigate('Prize');
  }

  _onCamera = () => {
    const { navigate } = this.props.navigation;
    navigate('TakePhoto');
  }

  _onToken = () => {
    const { navigate } = this.props.navigation;
    navigate('Setting');
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
