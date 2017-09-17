import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';

import FontIcon from '../../../Components/FontIcon/FontIcon.component';

import navPropTypes from '../../../PropTypes/Navigation.propTypes';
import styles from './MenuItem.component.styles';

class MenuItem extends Component {
  _onPress = () => {
    const { onItemPress, navigate, item } = this.props;

    onItemPress();
    navigate(item.route);
  }

  render() {
    const { containerStyle, textStyle, item } = this.props;

    return (
      <TouchableOpacity onPress={this._onPress} style={[containerStyle, styles.menu]}>
        <FontIcon name={item.icon} />
        <Text style={textStyle}>{item.name}</Text>
      </TouchableOpacity>
    );
  }
}

MenuItem.propTypes = {
  ...navPropTypes,
  onItemPress: propTypes.func.isRequired,
  item: propTypes.object.isRequired,
  containerStyle: propTypes.object,
  textStyle: propTypes.object,
  icon: propTypes.object
};

export default MenuItem;
