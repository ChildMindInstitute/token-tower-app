import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import Main from '../../Components/Main/Main.component';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import navPropTypes from '../../PropTypes/Navigation.propTypes';
import { USER_ROLE } from '../../Utilities/Constant.utils';

class MainContainer extends Component {
  _onCamera = () => {
    const { navigation: { navigate } } = this.props;
    navigate(routeName.TokenTotem.TakePhoto);
  }

  _onMinus = () => {
    // const { removeToken } = this.props;
  }

  _onToken = () => {
    const { isChild, navigation } = this.props;
    const { navigate } = navigation;

    if (isChild) navigation.goBack();
    else navigate(routeName.Root.Config);
  }

  _onPlus = () => {
    // const { addToken } = this.props;
  }

  _onPrize = () => {
    const { navigation: { navigate } } = this.props;
    navigate(routeName.TokenTotem.Prize);
  }

  _getColor = () => {
    const { isChild } = this.props;
    return isChild ? 'transparent' : '';
  };

  _initFuncWithRole = (callback) => {
    const { isChild } = this.props;
    return isChild ? undefined : callback;
  }

  render() {
    return (
      <Main
        onCameraPress={this._onCamera}
        onMinusPress={this._initFuncWithRole(this._onMinus)}
        onTokenPress={this._onToken}
        onPlusPress={this._initFuncWithRole(this._onPlus)}
        onPrizePress={this._onPrize}
        minusIconColor={this._getColor()}
        plusIconColor={this._getColor()}
      />
    );
  }
}

MainContainer.propTypes = {
  ...navPropTypes,
  isChild: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isChild: state.user.role === USER_ROLE.CHILD
});
const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
