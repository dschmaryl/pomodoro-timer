export const decreaseWorkTime = () => ({ type: 'DECREASE_WORK_TIME' });
export const increaseWorkTime = () => ({ type: 'INCREASE_WORK_TIME' });
export const setWorkTime = time => ({ type: 'SET_WORK_TIME', time });

export const decreaseShortBreakTime = () => ({
  type: 'DECREASE_SHORT_BREAK_TIME'
});
export const increaseShortBreakTime = () => ({
  type: 'INCREASE_SHORT_BREAK_TIME'
});
export const decreaseLongBreakTime = () => ({
  type: 'DECREASE_LONG_BREAK_TIME'
});
export const increaseLongBreakTime = () => ({
  type: 'INCREASE_LONG_BREAK_TIME'
});

export const setTimer = minutes => ({ type: 'SET_TIMER', minutes });
export const resetTimer = () => ({ type: 'RESET_TIMER' });
export const togglePaused = () => ({ type: 'TOGGLE_PAUSED' });
export const timerTick = () => ({ type: 'TIMER_TICK' });

export const finishSession = () => ({ type: 'FINISH_SESSION' });
export const backOneSession = () => ({ type: 'BACK_ONE_SESSION' });

export const toggleSoundEnabled = () => ({ type: 'TOGGLE_SOUND_ENABLED' });
export const decreaseVolume = () => ({ type: 'DECREASE_VOLUME' });
export const increaseVolume = () => ({ type: 'INCREASE_VOLUME' });
export const toggleSoundPlaying = () => ({ type: 'TOGGLE_SOUND_PLAYING' });

export const setTheme = themeIndex => ({ type: 'SET_THEME', themeIndex });
// export const nextTheme = () => ({ type: 'NEXT_THEME' });
export const toggleDarkMode = () => ({ type: 'TOGGLE_DARK_MODE' });

export const toggleKeepScreenAwake = () => ({
  type: 'TOGGLE_KEEP_SCREEN_AWAKE'
});

export const toggleShowStart = () => ({ type: 'TOGGLE_SHOW_START' });
export const toggleFirstRun = () => ({ type: 'TOGGLE_FIRST_RUN' });
