import { database } from 'firebase';

import ChildModel from '../Child/Child.model';
import ParentModel from '../Parent/Parent.model';
import { prizeListContruct } from '../Prize/Prize.model';

import { REPLENISH_TOKEN_TYPE } from '../../Utilities/Constant.utils';

export default ({
  uid,
  displayName,
  email,
  isFirstTutorial = true,
  canAnimation = true,
  canContact = false,
  initialToken = 10,
  replenishTokenType = REPLENISH_TOKEN_TYPE.DAILY,
  child = null,
  parent = {},
  prizes = null,
  isAdmin = false
}) =>
  ({
    uid,
    displayName,
    email,
    isFirstTutorial,
    canAnimation,
    canContact,
    initialToken,
    replenishTokenType,
    child: child && new ChildModel(child),
    parent: parent && new ParentModel(parent),
    prizes: prizes && prizeListContruct(prizes),
    timestamp: database.ServerValue.TIMESTAMP,
    isAdmin
  });
