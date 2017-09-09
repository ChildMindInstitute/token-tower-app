import React, { Component } from 'react';
import { View } from 'react-native';
import { createNavigator, TabRouter, addNavigationHelpers, Header } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';
import { MessageBar, MessageBarManager } from 'react-native-message-bar';
import { connect } from 'react-redux';

import Routes from '../RouteConfigs/RootNavigatorRoute.config';
import styles from './CustomNavigator.component.styles';
import propTypes from '../NavPropTypes/Navigation.propTypes';
import Constant from '../../Utilities/Constant.utils';

class WrapperSceneView extends Component {
  componentDidMount() {
    MessageBarManager.registerMessageBar(this.msgBar);
  }

  componentWillReceiveProps(nextProps) {
    this._showMsgBar(
      nextProps.topNotification,
      this.props.topNotification
    );
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  _showMsgBar = (nextMsg, msg) => {
    if (nextMsg && nextMsg.message && msg !== nextMsg) {
      MessageBarManager.showAlert({
        ...nextMsg,
        viewTopOffset: Header.HEIGHT,
        animationType: 'SlideFromLeft'
      });
    }
  }

  _getMsgBarInstance = (ref) => { this.msgBar = ref; };

  render() {
    const { router, navigation: { state, dispatch }, screenProps } = this.props;
    const { routes, index } = state;

    const ChildComponent = router.getComponentForRouteName(routes[index].routeName);
    const childNavProps = addNavigationHelpers({ dispatch, state: routes[index] });

    return (
      <View style={styles.container}>
        <ChildComponent navigation={childNavProps} screenProps={screenProps} />
        <Spinner
          visible={false}
          textContent={Constant.COMMON.SPINNER_MSG}
          textStyle={styles.spinerText}
        />
        <MessageBar ref={this._getMsgBarInstance} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  topNotification: state.topNotification
});

WrapperSceneView.propTypes = propTypes;

export default createNavigator(TabRouter(Routes))(connect(mapStateToProps)(WrapperSceneView));
