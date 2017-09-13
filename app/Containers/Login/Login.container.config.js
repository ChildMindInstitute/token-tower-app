import { showTopErrNotification } from '../../Utilities/Form.util';
import navPropTypes from '../../PropTypes/Navigation.propTypes';
import formPropTypes from '../../PropTypes/Form.propTypes';
import Constant from '../../Utilities/Constant.utils';

const propTypes = {
  ...navPropTypes,
  ...formPropTypes
};

export const showLoginFailNotify = (dispatch) => {
  const message = {
    title: Constant.ERR_MSG.LOGIN.FAIL.TITLE,
    message: Constant.ERR_MSG.LOGIN.FAIL.MESSAGE
  };

  showTopErrNotification(message, dispatch);
};

const form = {
  form: 'loginForm'
};

export default {
  propTypes,
  form
};
