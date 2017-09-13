import React from 'react';
import { View, Image, Text } from 'react-native';
import propTypes from 'prop-types';

import MenuItem from '../MenuItem/MenuItem.component';

import navPropTypes from '../../../PropTypes/Navigation.propTypes';
import listMenuItems from '../ListMenuItems';
import styles from './Menu.component.styes';
import images from '../../../Resources/Images';


const Menu = ({ navigation: { navigate }, onItemPress }) => (
  <View style={styles.container}>
    <View style={styles.imgContainer}>
      <Image resizeMode={'contain'} source={images.avatar} style={styles.image} />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text> Username </Text>
      </View>
    </View>
    {
      listMenuItems.map(item => (
        <MenuItem
          item={item}
          onItemPress={onItemPress}
          navigate={navigate}
          key={item.name || item.index}
        />
      ))
    }
  </View>
);

Menu.propTypes = {
  ...navPropTypes,
  onItemPress: propTypes.func.isRequired
};

export default Menu;
