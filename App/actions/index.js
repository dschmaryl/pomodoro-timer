export const decreaseWorkTime = () => ({ type: 'DECREASE_WORK_TIME' });
export const increaseWorkTime = () => ({ type: 'INCREASE_WORK_TIME' });
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
// export const resetPomodoro = () => ({ type: 'RESET_POMODORO' });
// export const resetEverything = () => ({ type: 'RESET_EVERYTHING' });

export const toggleSoundEnabled = () => ({ type: 'TOGGLE_SOUND_ENABLED' });
export const decreaseVolume = () => ({ type: 'DECREASE_VOLUME' });
export const increaseVolume = () => ({ type: 'INCREASE_VOLUME' });
export const toggleSound = () => ({ type: 'TOGGLE_SOUND_PLAYING' });

export const toggleTheme = () => ({ type: 'TOGGLE_THEME' });
