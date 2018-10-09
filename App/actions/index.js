export const showTimePicker = (session, oldTime) => ({
  type: 'SHOW_TIME_PICKER',
  session,
  oldTime
});
export const setTime = newTime => ({ type: 'SET_TIME', newTime });
export const hideTimePicker = () => ({ type: 'HIDE_TIME_PICKER' });

export const setTimer = minutes => ({ type: 'SET_TIMER', minutes });
export const resetTimer = () => ({ type: 'RESET_TIMER' });
export const togglePaused = () => ({ type: 'TOGGLE_PAUSED' });
export const updateTime = (minutes, seconds) => ({
  type: 'UPDATE_TIME',
  minutes,
  seconds
});

export const finishSession = () => ({ type: 'FINISH_SESSION' });
export const backOneSession = () => ({ type: 'BACK_ONE_SESSION' });
export const togglePauseAtSessionEnd = () => ({
  type: 'TOGGLE_PAUSE_AT_SESSION_END'
});

export const toggleSoundEnabled = () => ({ type: 'TOGGLE_SOUND_ENABLED' });
export const toggleSoundPlaying = () => ({ type: 'TOGGLE_SOUND_PLAYING' });
export const showVolumePicker = () => ({ type: 'SHOW_VOLUME_PICKER' });
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
