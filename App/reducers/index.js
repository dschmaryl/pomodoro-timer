import { combineReducers } from 'redux';

import { colors } from './colors';
import { screen } from './screen';
import { session } from './session';
import { sound } from './sound';
import { start } from './start';
import { timer } from './timer';
import { times } from './times';

export default combineReducers({
  colors,
  screen,
  session,
  sound,
  start,
  timer,
  times
});
