import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Main from '../../Components/Main/Main.component';

import { userUpdateProfile, userInitProfile } from '../../Redux/Reducers/User/User.reducer';

import images from '../../Resources/Images';
import styles from './Tutorial.container.styles';

import routeName from '../../Navigation/RouteConfigs/Route.config';
import navPropTypes from '../../PropTypes/Navigation.propTypes';

class TutorialContainer extends Component {
  constructor() {
    super();
    this.state = { step: 0 };
  }

  _onPress = () => {
    if (this.state.step === 3) {
      const { user, updateProfile, initProfile, navigation: { navigate } } = this.props;

      updateProfile({ ...user, isFirstTutorial: false })
        .then(({ value }) => initProfile(value))
        .then(() => navigate(routeName.Root.TokenTotem));
    } else this.setState({ step: this.state.step + 1 });
  }

  _renderStep1 = () => (
    <View style={styles._tutorialContainer}>
      <View style={styles._bubble}>
        <Text style={styles._text1}>Take PHOTOS to decorate your tokens!</Text>
      </View>
      <View style={styles._imgContainer}>
        <Image source={images.arrow} style={styles._arrow} />
      </View>
    </View>
  )

  _renderStep2 = () => (
    <View style={styles._tutorialContainer}>
      <View style={styles._bubble}>
        <Text style={styles._text2}>View your TOKENS!</Text>
      </View>
      <View style={styles._imgContainer1}>
        <Image source={images.arrow} style={styles._arrow1} />
      </View>
    </View>
  )

  _renderStep3 = () => (
    <View style={styles._tutorialContainer}>
      <View style={styles._bubble}>
        <Text style={styles._text2}>View your PRIZES!</Text>
      </View>
      <View style={styles._imgContainer2}>
        <Image source={images.arrow} style={styles._arrow2} />
      </View>
    </View>
  )

  _renderStep4 = () => (
    <View style={styles._tutorialContainer}>
      <View style={styles._bubble}>
        <Text style={styles._text3}>Remove/add tokens by tapping on the minus/plus symbol.</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles._imgContainer3}>
          <Image source={images.arrow} style={styles._arrow3} />
          <Image source={images.arrow} style={styles._arrow4} />
        </View>
      </View>
    </View>
  )

  _renderTutorialByStep = (step) => {
    switch (step) {
      case 0: return this._renderStep1();
      case 1: return this._renderStep2();
      case 2: return this._renderStep3();
      case 3: return this._renderStep4();
      default:
        return undefined;
    }
  }

  _renderMain = (step) => {
    const pigStyle = styles._opacity;
    let cameraStyle = styles._opacity;
    let minusIconColor;
    let tokenStyle = styles._opacity;
    let plusIconColor;
    let presentStyle = styles._opacity;

    switch (step) {
      case 0: {
        cameraStyle = undefined;
        break;
      }
      case 1: {
        tokenStyle = undefined;
        break;
      }
      case 2: {
        presentStyle = undefined;
        break;
      }
      case 3: {
        minusIconColor = '#efac00';
        plusIconColor = '#efac00';
        break;
      }
      default:
        break;
    }

    return (
      <Main
        pigStyle={pigStyle}
        cameraStyle={cameraStyle}
        minusIconColor={minusIconColor}
        tokenStyle={tokenStyle}
        plusIconColor={plusIconColor}
        presentStyle={presentStyle}
      />
    );
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this._onPress}>
        <View style={styles._container}>
          <View style={styles._tutorialContainer}>
            {this._renderTutorialByStep(this.state.step)}
          </View>
          {this._renderMain(this.state.step)}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
TutorialContainer.propTypes = {
  ...navPropTypes,
  user: PropTypes.object.isRequired,
  updateProfile: PropTypes.func.isRequired,
  initProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = {
  updateProfile: userUpdateProfile,
  initProfile: userInitProfile
};

export default connect(mapStateToProps, mapDispatchToProps)(TutorialContainer);
