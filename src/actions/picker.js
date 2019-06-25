import { alarmSounds, tickSounds } from '../sounds';
import { themes } from '../themes';

import { getMin, getSec, getMillisecs } from '../utils';

export const showTimePicker = sessionType => (dispatch, getState) => {
  const oldTime = getState().timer[sessionType];

  return dispatch({ type: 'SHOW_TIME_PICKER', sessionType, oldTime });
};

export const setMinutes = newValue => (dispatch, getState) => {
  const { sessionType } = getState().picker;
  let seconds = getSec(getState().timer[sessionType]);

  return dispatch({
    type: 'SET_TIME',
    timeType: sessionType,
    newTime: Math.max(1000, getMillisecs(+newValue, seconds))
  });
};

export const setSeconds = newValue => (dispatch, getState) => {
  const { sessionType } = getState().picker;
  let minutes = getMin(getState().timer[sessionType]);

  return dispatch({
    type: 'SET_TIME',
    timeType: sessionType,
    newTime: Math.max(1000, getMillisecs(minutes, +newValue))
  });
};

export const showPicker = (valueType, oldValue) => (dispatch, getState) => {
  let data;
  let headerText;
  let visibleItemCount = 7;
  let isCyclic = false;
  let selectedItemPosition = oldValue - 1;

  switch (valueType) {
    case 'numPomodoros':
      data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
        v => '-  ' + v + '  -'
      );
      headerText = 'Number of short breaks';
      selectedItemPosition++;
      break;

    case 'alarmVolume':
    case 'tickVolume':
      data = Array.from({ length: 100 }, (_, i) => '-  ' + (i + 1) + '  -');
      headerText = valueType === 'alarmVolume' ? 'Alarm volume' : 'Tick volume';
      break;

    case 'alarmSound':
      data = alarmSounds.map(sound => sound.name);
      headerText = 'Alarm sound';
      selectedItemPosition = getState().settings.alarmSoundIndex;
      visibleItemCount = 5;
      isCyclic = true;
      break;

    case 'tickSound':
      data = tickSounds.map(sound => sound.name);
      headerText = 'Tick sound';
      selectedItemPosition = getState().settings.tickSoundIndex;
      visibleItemCount = 5;
      isCyclic = true;
      break;

    case 'theme':
      data = themes.map(theme => theme.name);
      headerText = 'Color Theme';
      selectedItemPosition = getState().settings.themeIndex;
      visibleItemCount = 5;
      isCyclic = true;
      break;

    default:
      return;
  }

  return dispatch({
    type: 'SHOW_PICKER',
    valueType,
    headerText,
    data,
    visibleItemCount,
    selectedItemPosition,
    isCyclic
  });
};

export const setPickerValue = newValue => (dispatch, getState) => {
  const { valueType } = getState().picker;

  switch (valueType) {
    case 'numPomodoros':
      return dispatch({
        type: 'SET_NUM_POMODOROS',
        numPomodoros: newValue + 1
      });

    case 'alarmVolume':
    case 'tickVolume':
      return dispatch({
        type: 'SET_VOLUME',
        soundType: valueType,
        volume: newValue + 1
      });

    case 'alarmSound':
      return dispatch({
        type: 'SET_ALARM_SOUND',
        alarmSoundIndex: newValue
      });

    case 'tickSound':
      return dispatch({
        type: 'SET_TICK_SOUND',
        tickSoundIndex: newValue
      });

    case 'theme':
      return dispatch({
        type: 'SET_THEME',
        themeIndex: newValue
      });

    default:
      return;
  }
};

export const hidePicker = () => ({ type: 'HIDE_PICKER' });
