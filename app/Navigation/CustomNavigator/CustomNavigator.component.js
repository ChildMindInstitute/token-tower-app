import React from 'react';
import { addNavigationHelpers } from 'react-navigation';

const WrapperSceneView = (props) => {
  const { router, navigation: { state, dispatch } } = props;
  const { routes, index } = state;

  const Component = router.getComponentForState(state);

  const childNavigation = addNavigationHelpers({ dispatch, state: routes[index] });

  return <Component navigation={childNavigation} />;
};

export default WrapperSceneView;
