import React from 'react';
import { View, Image, Text } from 'react-native';
import propTypes from 'prop-types';

import MenuItem from '../MenuItem/MenuItem.component';

import images from '../../../Resources/Images';
import styles from './Menu.component.styles';

import navPropTypes from '../../../PropTypes/Navigation.propTypes';
import listMenuItems from '../ListMenuItems';

const Menu = ({ navigation: { navigate }, onItemPress }) => (
  <View style={styles.container}>
    <View style={styles.imgContainer}>
      <Image resizeMode={'contain'} source={images.avatar} style={styles.image} />
      <View style={styles.textContainer}>
        <Text> Username </Text>
      </View>
    </View>
    <View style={styles.menuContainer}>
      {
        listMenuItems.map(item => (
          <MenuItem
            containerStyle={styles.menu}
            textStyle={styles.text}
            item={item}
            onItemPress={onItemPress}
            navigate={navigate}
            key={item.name || item.index}
          />

        ))
      }
    </View>
  </View>
);

Menu.propTypes = {
  ...navPropTypes,
  onItemPress: propTypes.func.isRequired
};

export default Menu;
