import { themes } from '../themes';

// appState
export const toggleAppState = () => ({ type: 'TOGGLE_APP_STATE' });

// picker
export const showPicker = (valueType, oldValue) => (dispatch, getState) => {
  let data;
  let visibleItemCount = 9;
  let isCyclic = false;
  let type = valueType.slice(-4);
  let selectedItemPosition =
    type === 'heme' ? getState().theme.themeIndex : oldValue - 1;

  if (type === 'Time') {
    data = Array(99)
      .fill()
      .map((_, i) => '-  ' + (i + 1) + '  -');
  } else if (type === 'lume') {
    data = Array(100)
      .fill()
      .map((_, i) => '-  ' + (i + 1) + '  -');
  } else {
    data = themes.map(theme => theme.name);
    visibleItemCount = 7;
    isCyclic = true;
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
  const type = valueType.slice(-4);
  if (type === 'Time') {
    return dispatch({
      type: 'SET_TIME',
      timeType: valueType,
      newTime: newValue + 1
    });
  } else if (type === 'lume') {
    return dispatch({
      type: 'SET_VOLUME',
      soundType: valueType,
      volume: newValue + 1
    });
  } else {
    return dispatch({
      type: 'SET_THEME',
      themeIndex: newValue
    });
  }
};

export const hidePicker = () => ({ type: 'HIDE_PICKER' });

//settings
export const togglePauseAtSessionEnd = () => ({
  type: 'TOGGLE_PAUSE_AT_SESSION_END'
});
export const toggleShowPauseButton = () => ({
  type: 'TOGGLE_SHOW_PAUSE_BUTTON'
});
export const toggleNotificationEnabled = () => ({
  type: 'TOGGLE_NOTIFICATION_ENABLED'
});
export const toggleAlarmEnabled = () => ({ type: 'TOGGLE_ALARM_ENABLED' });
export const toggleTickEnabled = () => ({ type: 'TOGGLE_TICK_ENABLED' });
export const toggleKeepScreenAwake = () => ({
  type: 'TOGGLE_KEEP_SCREEN_AWAKE'
});
export const setFirstRunToFalse = () => ({ type: 'SET_FIRST_RUN_TO_FALSE' });
export const toggleDarkMode = () => ({ type: 'TOGGLE_DARK_MODE' });

// timer
export const timerTick = () => (dispatch, getState) => {
  const { pauseAtSessionEnd, alarmIsEnabled } = getState().settings;
  const { endTime, seconds } = getState().timer;
  const time = endTime - Date.now();
  if (time < 0) {
    return dispatch({
      type: 'FINISH_SESSION',
      isPaused: pauseAtSessionEnd,
      currentTime: Date.now(),
      alarmIsPlaying: false
    });
  } else if (time < 1000) {
    return dispatch({
      type: 'FINISH_SESSION',
      isPaused: pauseAtSessionEnd,
      currentTime: Date.now(),
      alarmIsPlaying: alarmIsEnabled
    });
  } else {
    const newMinutes = Math.floor(time / 60000);
    const newSeconds = Math.floor((time % 60000) / 1000);
    if (newSeconds != seconds) {
      return dispatch({
        type: 'UPDATE_TIME',
        minutes: newMinutes,
        seconds: newSeconds
      });
    }
  }
};

export const nextSession = () => ({
  type: 'FINISH_SESSION',
  isPaused: true,
  currentTime: Date.now()
});
export const backOneSession = () => ({
  type: 'BACK_ONE_SESSION',
  currentTime: Date.now()
});
export const togglePaused = () => ({
  type: 'TOGGLE_PAUSED',
  currentTime: Date.now()
});
export const resetTime = () => ({ type: 'RESET_TIME' });
export const toggleAlarmPlaying = () => ({ type: 'TOGGLE_ALARM_PLAYING' });
