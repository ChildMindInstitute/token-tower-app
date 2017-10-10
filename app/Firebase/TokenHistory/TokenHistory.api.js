import { ref } from '../Firebase.utils';

import TokenHistoryModel from '../../Models/TokenHistory/TokenHistory.model';

const tokenHistoryLocation = 'tokenHistory';

const pushNewTokenHistory = (userId, value) => {
  const history = ref(`${tokenHistoryLocation}/${userId}`).push();
  return history.set(new TokenHistoryModel(value));
};

export default {
  pushNewTokenHistory
};
