import React, { Component } from 'react';
import { Text } from 'react-native';
import propTypes from 'prop-types';

import FontIcon from '../../../Components/FontIcon/FontIcon.component';
import Btn from '../../../Components/FormButton/FormButton.component';

import navPropTypes from '../../../PropTypes/Navigation.propTypes';
import styles from './MenuItem.component.styles';

class MenuItem extends Component {
  _onPress = () => {
    const { onItemPress, navigate, item } = this.props;

    onItemPress();
    navigate(item.route);
  }

  render() {
    const { containerStyle, textStyle, item, role } = this.props;

    if (item.role && role !== item.role) return null;

    return (
      <Btn onPress={this._onPress} btnStyle={{ ...containerStyle, ...styles.menu }}>
        <FontIcon name={item.icon} />
        <Text style={textStyle}>{item.name}</Text>
      </Btn>
    );
  }
}

MenuItem.propTypes = {
  ...navPropTypes,
  onItemPress: propTypes.func.isRequired,
  item: propTypes.object.isRequired,
  containerStyle: propTypes.object,
  textStyle: propTypes.object,
  icon: propTypes.object,
  isParent: propTypes.bool,
  role: propTypes.string
};

export default MenuItem;
