import { combineReducers } from 'redux';

import { screen } from './screen';
import { session } from './session';
import { sound } from './sound';
import { start } from './start';
import { theme } from './theme';
import { timer } from './timer';
import { times } from './times';

export default combineReducers({
  screen,
  session,
  sound,
  start,
  theme,
  timer,
  times
});
