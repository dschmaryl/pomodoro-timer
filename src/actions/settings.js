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
