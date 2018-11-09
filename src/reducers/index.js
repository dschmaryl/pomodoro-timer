import { combineReducers } from 'redux';

import { picker } from './picker';
import { settings } from './settings';
import { timer } from './timer';

export default combineReducers({
  picker,
  settings,
  timer
});
