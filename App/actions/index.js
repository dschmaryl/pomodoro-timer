// picker
export const showPicker = (valueType, oldValue) => ({
  type: 'SHOW_PICKER',
  valueType,
  oldValue
});
export const setPickerValue = newValue => (dispatch, getState) => {
  const { valueType } = getState().picker;
  if (valueType.slice(-4) === 'Time') {
    return dispatch({
      type: 'SET_TIME',
      timeType: valueType,
      newTime: newValue
    });
  } else {
    return dispatch({
      type: 'SET_VOLUME',
      soundType: valueType,
      volume: newValue
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
export const toggleKeepScreenAwake = () => ({
  type: 'TOGGLE_KEEP_SCREEN_AWAKE'
});
export const setFirstRunToFalse = () => ({ type: 'SET_FIRST_RUN_TO_FALSE' });

// theme
export const showThemePicker = () => ({ type: 'SHOW_THEME_PICKER' });
export const setTheme = themeIndex => ({ type: 'SET_THEME', themeIndex });
export const hideThemePicker = () => ({ type: 'HIDE_THEME_PICKER' });
export const toggleDarkMode = () => ({ type: 'TOGGLE_DARK_MODE' });

// timer
export const updateTime = (minutes, seconds) => ({
  type: 'UPDATE_TIME',
  minutes,
  seconds
});
export const finishSession = finishedActive => (dispatch, getState) => {
  const { pauseAtSessionEnd, alarmIsEnabled } = getState().settings;
  return dispatch({
    type: 'FINISH_SESSION',
    isPaused: pauseAtSessionEnd,
    currentTime: Date.now(),
    alarmIsPlaying: alarmIsEnabled && finishedActive
  });
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
