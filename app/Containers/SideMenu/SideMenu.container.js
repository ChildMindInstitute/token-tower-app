import React from 'react';
import propTypes from 'prop-types';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';

import Menu from './Menu/Menu.component';

import { sideMenuOpen, sideMenuClose } from '../../Redux/Reducers/SideMenu/SideMenu.reducer';
import navPropTypes from '../../PropTypes/Navigation.propTypes';

const DrawerMenu = (props) => {
  const { children, isOpened, onOpen, onClose,
    navigation: { state: { index, routes } } } = props;

  const menu = <Menu {...props} onItemPress={onClose} />;
  const canSwipe = routes[index].routes.length === 1;

  return (
    <Drawer
      type={'overlay'} content={menu}
      open={isOpened} tapToClose
      onOpen={onOpen} onClose={onClose}
      negotiatePan acceptPan={canSwipe}
      acceptPanOnDrawer={false}
      panOpenMask={0.2} panCloseMask={0.5}
      openDrawerOffset={0.2}
    >
      {children}
    </Drawer>
  );
};

DrawerMenu.propTypes = {
  ...navPropTypes,
  children: propTypes.node.isRequired,
  isOpened: propTypes.bool.isRequired,
  onOpen: propTypes.func.isRequired,
  onClose: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  isOpened: state.sideMenu.isOpened
});

const mapDispatchToProps = {
  onOpen: sideMenuOpen,
  onClose: sideMenuClose
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
