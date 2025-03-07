import React from 'react';
import propTypes from 'prop-types';
import Drawer from 'react-native-drawer';
import { connect } from 'react-redux';

import Menu from './/Menu/Menu.component';

import { sideMenuOpen, sideMenuClose } from '../../Redux/Reducers/SideMenu/SideMenu.reducer';
import { authenticationSignOut } from '../../Redux/Reducers/Authentication/Authentication.reducer';

import navPropTypes from '../../PropTypes/Navigation.propTypes';
import { USER_ROLE } from '../../Utilities/Constant.utils';

const DrawerMenu = (props) => {
  const { children, isOpened, onOpen, onClose, isAuthenticated, childName } = props;

  const menu = <Menu {...props} onItemPress={onClose} />;

  return (
    <Drawer
      type={'overlay'} content={menu}
      open={isOpened} tapToClose
      onOpen={onOpen} onClose={onClose}
      negotiatePan acceptPan={isAuthenticated && !!childName}
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
  onClose: propTypes.func.isRequired,
  signOut: propTypes.func.isRequired,
  isAuthenticated: propTypes.bool.isRequired,
  displayName: propTypes.string,
  childName: propTypes.string,
  isParent: propTypes.bool,
  photoURL: propTypes.string,
  role: propTypes.string
};

const mapStateToProps = ({ sideMenu, user }) => ({
  isOpened: sideMenu.isOpened,
  isAuthenticated: user.isAuthenticated,
  displayName: user.displayName,
  childName: user.child && user.child.name,
  isParent: !user.role || user.role === USER_ROLE.PARENT,
  photoURL: user.photoURL,
  role: user.role
});

const mapDispatchToProps = {
  onOpen: sideMenuOpen,
  onClose: sideMenuClose,
  signOut: authenticationSignOut
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
