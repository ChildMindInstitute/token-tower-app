import React, { Component } from 'react';
import propTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import Header from '../../Components/TokenTotemHeader/TokenTotemHeader.component';
import Button from '../../Components/FormButton/FormButton.component';

import { userActRoleAsParent, userActRoleAsChild } from '../../Redux/Reducers/User/User.reducer';

import styles from './MainUserSelection.container.styles';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import navPropTypes from '../../PropTypes/Navigation.propTypes';

class MainUserSelectionContainer extends Component {
  _onParentChoice = () => {
    const { actRoleAsParent, isFirstTutorial, navigation: { navigate } } = this.props;
    actRoleAsParent();

    if (isFirstTutorial) navigate(routeName.Root.TokenTotemTutorial);
    else navigate(routeName.Root.TokenTotem);
  }

  _onChildrenChoice = () => {
    const { actRoleAsChild, navigation: { navigate } } = this.props;
    actRoleAsChild();
    navigate(routeName.Root.TokenTotem);
  }

  _renderParentChoice = () => (
    <View>
      <Button
        onPress={this._onParentChoice}
        text={this.props.parentName}
        btnStyle={styles.btn}
      />
    </View>
  )

  _renderChildrenChoice = () => (
    <View>
      <Button
        onPress={this._onChildrenChoice}
        text={this.props.childName}
        btnStyle={styles.btn}
      />
    </View>
  )

  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View>
          {this._renderParentChoice()}
          {this._renderChildrenChoice()}
        </View>
      </View>
    );
  }
}

MainUserSelectionContainer.propTypes = {
  ...navPropTypes,
  isFirstTutorial: propTypes.bool.isRequired,
  parentName: propTypes.string.isRequired,
  childName: propTypes.string.isRequired,
  actRoleAsParent: propTypes.func.isRequired,
  actRoleAsChild: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  isFirstTutorial: state.user.isFirstTutorial,
  parentName: state.user.displayName,
  childName: state.user.child.name
});
const mapDispatchToProps = {
  actRoleAsParent: userActRoleAsParent,
  actRoleAsChild: userActRoleAsChild
};

export default connect(mapStateToProps, mapDispatchToProps)(MainUserSelectionContainer);
