import { combineReducers } from 'redux';

import { picker } from './picker';
import { session } from './session';
import { settings } from './settings'
import { sound } from './sound';
import { theme } from './theme';
import { timer } from './timer';

export default combineReducers({
  picker,
  session,
  settings,
  sound,
  theme,
  timer
});
