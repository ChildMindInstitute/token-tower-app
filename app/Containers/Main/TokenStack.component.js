import React, { Component } from 'react';
import { View } from 'react-native';
import { Field } from 'redux-form';

import Token from './Token.component';

import styles from './TokenStack.component.styles';

import formPropTypes from '../../PropTypes/Form.propTypes';

class TokenStack extends Component {
  _renderToken = (member, index) => (
    <Field name={member} component={Token} key={member} isLast={index === this.props.fields.length - 1} />
  );

  render() {
    const { fields } = this.props;

    return (
      <View style={styles.container}>
        {fields.map(this._renderToken)}
      </View>
    );
  }
}

TokenStack.propTypes = {
  ...formPropTypes
};

export default TokenStack;
