import { combineReducers } from 'redux';

import { picker } from './picker';
import { settings } from './settings'
import { sound } from './sound';
import { theme } from './theme';
import { timer } from './timer';

export default combineReducers({
  picker,
  settings,
  sound,
  theme,
  timer
});
