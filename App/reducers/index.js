import { combineReducers } from 'redux';

import { colors } from './colors';
import { screen } from './screen';
import { sound } from './sound';
import { session } from './session';
import { times } from './times';
import { timer } from './timer';

export default combineReducers({
  colors,
  screen,
  sound,
  session,
  times,
  timer
});
