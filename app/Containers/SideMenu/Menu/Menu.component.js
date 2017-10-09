import React from 'react';
import { View, Image, Text } from 'react-native';
import propTypes from 'prop-types';

import MenuItem from '../MenuItem/MenuItem.component';

import images from '../../../Resources/Images';
import styles from './Menu.component.styles';

import routeName from '../../../Navigation/RouteConfigs/Route.config';
import navPropTypes from '../../../PropTypes/Navigation.propTypes';
import listMenuItems from '../ListMenuItems';

const _renderSignOutBtn = (onItemPress, navigate, signOut) => {
  const _onItemPress = () => signOut().then(onItemPress);
  const item = { name: 'Sign Out', icon: 'logout', route: routeName.Root.Authentication };

  return (
    <MenuItem
      containerStyle={styles.menu}
      textStyle={styles.text}
      onItemPress={_onItemPress}
      navigate={navigate}
      item={item}
    />
  );
};

const Menu = ({ navigation: { navigate }, onItemPress, displayName, photoURL, signOut }) => (
  <View style={styles.container}>
    <View style={styles.imgContainer}>
      <Image
        resizeMode={'contain'}
        source={(photoURL && { uri: photoURL }) || images.avatar}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{displayName}</Text>
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
            key={item.name}
          />
        ))
      }
      {_renderSignOutBtn(onItemPress, navigate, signOut)}
    </View>
  </View>
);

Menu.propTypes = {
  ...navPropTypes,
  onItemPress: propTypes.func.isRequired,
  signOut: propTypes.func.isRequired,
  displayName: propTypes.string,
  photoURL: propTypes.string
};

export default Menu;
