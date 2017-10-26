import React from 'react';
import { View, Image, Text } from 'react-native';
import propTypes from 'prop-types';

import MenuItem from '../MenuItem/MenuItem.component';

import images from '../../../Resources/Images';
import styles from './Menu.component.styles';

import { deletePhotos } from '../../../Utilities/Photos.utils';

import navPropTypes from '../../../PropTypes/Navigation.propTypes';
import listMenuItems from '../ListMenuItems';

const _renderSignOutBtn = (onItemPress, navigate, signOut) => {
  const _onItemPress = () => signOut().then(onItemPress).then(deletePhotos);
  const item = { name: 'Sign Out', icon: 'logout' };

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

const Menu = ({ navigation: { navigate }, onItemPress,
  displayName, childName, isParent, photoURL, signOut, role }) =>
  (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          resizeMode={'contain'}
          source={isParent ? ((photoURL && { uri: photoURL }) || images.avatar) : images.unicorn}
          style={styles.image}
        />
        <Text style={styles.userName}>{isParent ? displayName : childName}</Text>
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
              role={role}
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
  photoURL: propTypes.string,
  childName: propTypes.string,
  isParent: propTypes.bool,
  role: propTypes.string
};

export default Menu;
