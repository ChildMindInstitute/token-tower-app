import React, { Component } from 'react';
import { View } from 'react-native';
import { Field } from 'redux-form';

import Token from './Token.component';

import styles from './TokenStack.component.styles';

import formPropTypes from '../../PropTypes/Form.propTypes';

class TokenStack extends Component {
  state = {}

  _renderToken = (member, index) => {
    const { fields } = this.props;
    const { stackHeight } = this.state;

    return (
      <Field
        name={member} component={Token}
        key={member} isLast={index === fields.length - 1}
        stackHeight={this.state.stackHeight}
        shouldScale={80 * fields.length > stackHeight}
      />
    );
  }

  _onLayout = (event) => {
    const { nativeEvent: { layout: { height } } } = event;
    this.setState({ stackHeight: height });
  };

  render() {
    const { fields } = this.props;

    return (
      <View style={styles.container} onLayout={this._onLayout}>
        {this.state.stackHeight && fields.map(this._renderToken)}
      </View>
    );
  }
}

TokenStack.propTypes = {
  ...formPropTypes
};

export default TokenStack;
