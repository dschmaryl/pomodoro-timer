import { themes } from '../themes';

export const showPicker = (valueType, oldValue) => (dispatch, getState) => {
  let data;
  let visibleItemCount = 9;
  let isCyclic = false;
  let selectedItemPosition = oldValue - 1;

  switch (valueType) {
    case 'focusTime' || 'shortBreakTime' || 'longBreakTime':
      data = Array(99)
        .fill()
        .map((_, i) => '-  ' + (i + 1) + '  -');

    case 'alarmVolume' || 'tickVolume':
      data = Array(100)
        .fill()
        .map((_, i) => '-  ' + (i + 1) + '  -');

    case 'alarmSound':
      data = themes.map(theme => theme.name);
      selectedItemPosition = getState().settings.themeIndex;
      visibleItemCount = 7;
      isCyclic = true;

    case 'theme':
      data = themes.map(theme => theme.name);
      selectedItemPosition = getState().settings.themeIndex;
      visibleItemCount = 7;
      isCyclic = true;

    default:
      console.log('error in showPicker: unknown valuetype');
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
    case 'focusTime' || 'shortBreakTime' || 'longBreakTime':
      return dispatch({
        type: 'SET_TIME',
        timeType: valueType,
        newTime: newValue + 1
      });

    case 'alarmVolume' || 'tickVolume':
      return dispatch({
        type: 'SET_VOLUME',
        soundType: valueType,
        volume: newValue + 1
      });

    case 'alarmSound':
      return dispatch({
        type: 'SET_ALARM_SOUND',
        alarmSound: newValue
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
