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
export const toggleTickEnabled = () => ({ type: 'TOGGLE_TICK_ENABLED' });
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
