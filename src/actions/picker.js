import { sounds } from '../sounds';
import { themes } from '../themes';

export const showPicker = (valueType, oldValue) => (dispatch, getState) => {
  let data;
  let visibleItemCount = 9;
  let isCyclic = false;
  let selectedItemPosition = oldValue - 1;

  switch (valueType) {
    case 'focusTime':
    case 'shortBreakTime':
    case 'longBreakTime':
      data = Array.from({ length: 99 }, (_, i) => '-  ' + (i + 1) + '  -');
      break;

    case 'alarmVolume':
    case 'tickVolume':
      data = Array.from({ length: 100 }, (_, i) => '-  ' + (i + 1) + '  -');
      break;

    case 'alarmSound':
      data = sounds.alarmSounds.map(sound => sound.name);
      selectedItemPosition = getState().settings.alarmSoundIndex;
      visibleItemCount = 7;
      isCyclic = true;
      break;

    case 'theme':
      data = themes.map(theme => theme.name);
      selectedItemPosition = getState().settings.themeIndex;
      visibleItemCount = 7;
      isCyclic = true;
      break;

    default:
      console.log('error in showPicker: unknown valuetype');
      return;
  }

  return dispatch({
    type: 'SHOW_PICKER',
    valueType,
    data,
    visibleItemCount,
    selectedItemPosition,
    isCyclic
  });
};

export const setPickerValue = newValue => (dispatch, getState) => {
  const { valueType } = getState().picker;

  switch (valueType) {
    case 'focusTime':
    case 'shortBreakTime':
    case 'longBreakTime':
      return dispatch({
        type: 'SET_TIME',
        timeType: valueType,
        newTime: newValue + 1
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

    case 'theme':
      return dispatch({
        type: 'SET_THEME',
        themeIndex: newValue
      });

    default:
      return null;
  }
};

export const hidePicker = () => ({ type: 'HIDE_PICKER' });
