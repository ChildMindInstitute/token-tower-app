import PropTypes from 'prop-types';

const route = PropTypes.shape({
  index: PropTypes.number,
  key: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired
});

const routes = PropTypes.arrayOf(route);

const router = PropTypes.shape({
  getActionForPathAndParams: PropTypes.func.isRequired,
  getComponentForRouteName: PropTypes.func.isRequired,
  getComponentForState: PropTypes.func.isRequired,
  getPathAndParamsForState: PropTypes.func.isRequired,
  getScreenConfig: PropTypes.func.isRequired,
  getStateForAction: PropTypes.func.isRequired
});

const state = PropTypes.shape({
  index: PropTypes.number,
  routes
});

const propTypes = {
  navigation: PropTypes.shape({
    state,
    dispatch: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    setParams: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired
  }),
  router,
  state,
  screenProps: PropTypes.any
};

export default propTypes;
