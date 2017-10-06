import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { sideMenuToggle } from '../../Redux/Reducers/SideMenu/SideMenu.reducer';

import Btn from '../../Components/FormButton/FormButton.component';
import FontIcon from '../../Components/FontIcon/FontIcon.component';

import styles from './MenuButton.container.styles';

class MenuButtonContainer extends Component {
  _onPress = () => {
    this.props.sideMenuToggle();
  };

  render() {
    return (
      this.props.isAuthenticated && (
        <Btn onPress={this._onPress} btnStyle={styles.btn}>
          <FontIcon size={25} color={styles.btnColor} name={'menu'} />
        </Btn>
      )
    );
  }
}

MenuButtonContainer.propTypes = {
  isAuthenticated: propTypes.bool.isRequired,
  sideMenuToggle: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

const mapDispatchToProps = {
  sideMenuToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuButtonContainer);
