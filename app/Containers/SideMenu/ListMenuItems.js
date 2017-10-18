import routeName from '../../Navigation/RouteConfigs/Route.config';
import { USER_ROLE } from '../../Utilities/Constant.utils';

export default [
  {
    name: 'Switch User',
    icon: 'exchange',
    route: routeName.Root.MainUser,
    role: USER_ROLE.PARENT
  },
  {
    name: 'Photos',
    icon: 'picture',
    route: routeName.TokenTotem.PhotosList
  }
];
