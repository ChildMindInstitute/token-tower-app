import React from 'react';
import propTypes from 'prop-types';
import Drawer from 'react-native-drawer';

import Menu from './Menu/Menu.container';

const DrawerMenu = props => (
  <Drawer
    type={'overlay'}
    content={<Menu {...props} />}
    tapToClose
    panCloseMask={0.5}
    panOpenMask={0.2}
    acceptPanOnDrawer={false}
    acceptPan
    negotiatePan
    openDrawerOffset={0.2}
  >
    {props.children}
  </Drawer>
);

DrawerMenu.propTypes = {
  children: propTypes.node.isRequired
};

export default DrawerMenu;
