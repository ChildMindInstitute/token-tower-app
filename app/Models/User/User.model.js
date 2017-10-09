import { database } from 'firebase';

import ChildModel from '../Child/Child.model';
import { prizeListContruct } from '../Prize/Prize.model';

import { REPLENISH_TOKEN_TYPE } from '../../Utilities/Constant.utils';

export default ({
  uid,
  displayName,
  isFirstTutorial = true,
  canAnimation = true,
  canContact = false,
  initialToken = 10,
  replenishTokenType = REPLENISH_TOKEN_TYPE.DAILY,
  child = null,
  prizes = null
}) =>
  ({
    uid,
    displayName,
    isFirstTutorial,
    canAnimation,
    canContact,
    initialToken,
    replenishTokenType,
    child: child && new ChildModel(child),
    prizes: prizes && prizeListContruct(prizes),
    timestamp: database.ServerValue.TIMESTAMP
  });
