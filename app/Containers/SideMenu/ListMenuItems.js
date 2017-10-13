import routeName from '../../Navigation/RouteConfigs/Route.config';
import { USER_ROLE } from '../../Utilities/Constant.utils';

export default [
  {
    name: 'Switch user',
    icon: 'switch',
    route: routeName.Root.MainUser,
    role: USER_ROLE.PARENT
  }
];
