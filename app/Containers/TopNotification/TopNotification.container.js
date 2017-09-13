import React, { Component } from 'react';
import propTypes from 'prop-types';
import { MessageBar } from 'react-native-message-bar';
import { connect } from 'react-redux';

import { registerMsgBar, unregisterMsgBar, showMsgBar } from '../../Utilities/TopNotification.utils';

class TopNotification extends Component {
  componentDidMount() {
    registerMsgBar(this.msgBar);
  }

  componentWillReceiveProps(nextProps) {
    showMsgBar(nextProps.topNotification, this.props.topNotification);
  }

  componentWillUnmount() {
    unregisterMsgBar();
  }

  _getMsgBarInstance = (ref) => { this.msgBar = ref; };

  render() {
    return <MessageBar ref={this._getMsgBarInstance} />;
  }
}

const mapStateToProps = state => ({
  topNotification: state.topNotification
});

TopNotification.propTypes = {
  topNotification: propTypes.object
};

export default connect(mapStateToProps)(TopNotification);
