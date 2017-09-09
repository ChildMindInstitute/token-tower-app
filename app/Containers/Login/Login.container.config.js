import { showTopErrNotification } from '../../Utilities/Form.util';
import navPropTypes from '../../Navigation/NavPropTypes/Navigation.propTypes';
import Constant from '../../Utilities/Constant.utils';

const propTypes = {
  ...navPropTypes
};

const form = {
  form: 'loginForm',
  onSubmitFail: (value, dispatch) => {
    showTopErrNotification({
      title: Constant.ERR_MSG.LOGIN.FAIL.TITLE,
      message: Constant.ERR_MSG.LOGIN.FAIL.MESSAGE
    }, dispatch);
  }
};

export default {
  propTypes,
  form
};
