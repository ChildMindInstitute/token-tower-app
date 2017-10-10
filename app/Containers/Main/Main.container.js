import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, FieldArray } from 'redux-form';

import Main from '../../Components/Main/Main.component';
import TokenStack from './TokenStack.component';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import config from './Main.container.config';
import { USER_ROLE } from '../../Utilities/Constant.utils';

class MainContainer extends Component {
  _onCamera = () => {
    const { navigation: { navigate } } = this.props;
    navigate(routeName.TokenTotem.TakePhoto);
  }

  _onMinus = () => {
    const { array } = this.props;
    array.pop('tokenStack');
  }

  _onToken = () => {
    const { isChild, navigation } = this.props;
    const { navigate } = navigation;

    if (isChild) navigation.goBack();
    else navigate(routeName.Root.Config);
  }

  _onPlus = () => {
    const { array } = this.props;
    array.push('tokenStack', { tokenImgUrl: '' });
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

  _renderTokenStack = () => (
    <FieldArray
      component={TokenStack}
      name="tokenStack"
    />
  );

  _onPig = () => { }

  render() {
    return (
      <Main
        onCameraPress={this._onCamera}
        onPigPress={this._onPig} onTokenPress={this._onToken}
        onPlusPress={this._initFuncWithRole(this._onPlus)}
        onMinusPress={this._initFuncWithRole(this._onMinus)}
        minusIconColor={this._getColor()} plusIconColor={this._getColor()}
        onPrizePress={this._onPrize} token={this._renderTokenStack()}
      />
    );
  }
}

MainContainer.propTypes = config.propTypes;

const mapStateToProps = state => ({
  isChild: state.user.role === USER_ROLE.CHILD,
  initialValues: {
    tokenStack: [
      { tokenImgUrl: '' }
    ]
  }
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config.form)(MainContainer));
