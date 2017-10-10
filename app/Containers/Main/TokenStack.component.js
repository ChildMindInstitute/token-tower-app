import React, { Component } from 'react';
import { View } from 'react-native';
import { Field } from 'redux-form';

import Token from './Token.component';

import styles from './Token.component.style';

import formPropTypes from '../../PropTypes/Form.propTypes';

class TokenStack extends Component {
  _renderToken = member => (
    <Field name={`${member}.tokenImgUrl`} component={Token} key={member} />
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
