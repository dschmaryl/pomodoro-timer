//
// settings
//
export const showTimePicker = (session, oldTime) => ({
  type: 'SHOW_TIME_PICKER',
  session,
  oldTime
});
export const setTime = (newTime, session) => ({
  type: 'SET_TIME',
  session,
  newTime
});
export const hideTimePicker = () => ({ type: 'HIDE_TIME_PICKER' });

export const togglePauseAtSessionEnd = () => ({
  type: 'TOGGLE_PAUSE_AT_SESSION_END'
});
export const toggleShowPauseButton = () => ({
  type: 'TOGGLE_SHOW_PAUSE_BUTTON'
});
export const toggleNotificationEnabled = () => ({
  type: 'TOGGLE_NOTIFICATION_ENABLED'
});

export const toggleSoundEnabled = () => ({ type: 'TOGGLE_SOUND_ENABLED' });
export const showVolumePicker = oldVolume => ({
  type: 'SHOW_VOLUME_PICKER',
  oldVolume
});
export const setVolume = volume => ({ type: 'SET_VOLUME', volume });
export const hideVolumePicker = () => ({ type: 'HIDE_VOLUME_PICKER' });

export const showThemePicker = () => ({ type: 'SHOW_THEME_PICKER' });
export const setTheme = themeIndex => ({ type: 'SET_THEME', themeIndex });
export const hideThemePicker = () => ({ type: 'HIDE_THEME_PICKER' });
export const toggleDarkMode = () => ({ type: 'TOGGLE_DARK_MODE' });

export const toggleKeepScreenAwake = () => ({
  type: 'TOGGLE_KEEP_SCREEN_AWAKE'
});

export const toggleShowStart = () => ({ type: 'TOGGLE_SHOW_START' });
export const toggleFirstRun = () => ({ type: 'TOGGLE_FIRST_RUN' });

//
// timer
//
export const updateTime = (minutes, seconds) => ({
  type: 'UPDATE_TIME',
  minutes,
  seconds
});
export const finishSession = isPaused => ({ type: 'FINISH_SESSION', isPaused });
export const backOneSession = () => ({ type: 'BACK_ONE_SESSION' });
export const resetTime = () => ({ type: 'RESET_TIME' });
export const togglePaused = () => ({ type: 'TOGGLE_PAUSED' });

export const toggleSoundPlaying = () => ({ type: 'TOGGLE_SOUND_PLAYING' });
