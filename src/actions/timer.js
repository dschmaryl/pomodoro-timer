let timerInterval;

const timerTick = (dispatch, getState) => {
  const { endTime, seconds } = getState().timer;
  const time = endTime - Date.now();
  if (time < 1000) {
    const { pauseAtSessionEnd, alarmIsEnabled } = getState().settings;
    if (pauseAtSessionEnd) clearInterval(timerInterval);
    if (time < 0) {
      // app was not active when timer finished, so no alarm
      return dispatch({
        type: 'FINISH_SESSION',
        isPaused: pauseAtSessionEnd,
        currentTime: Date.now(),
        alarmIsPlaying: false
      });
    } else {
      return dispatch({
        type: 'FINISH_SESSION',
        isPaused: pauseAtSessionEnd,
        currentTime: Date.now(),
        alarmIsPlaying: alarmIsEnabled
      });
    }
  } else {
    const newSeconds = Math.floor((time % 60000) / 1000);
    if (newSeconds != seconds) {
      return dispatch({
        type: 'UPDATE_TIME',
        minutes: Math.floor(time / 60000),
        seconds: newSeconds
      });
    }
  }
};

export const togglePaused = () => (dispatch, getState) => {
  const { isPaused } = getState().timer;
  if (isPaused) {
    timerInterval = setInterval(() => timerTick(dispatch, getState), 2);
  } else {
    clearInterval(timerInterval);
  }
  dispatch({ type: 'TOGGLE_PAUSED', currentTime: Date.now() });
};

export const nextSession = () => {
  clearInterval(timerInterval);
  return {
    type: 'FINISH_SESSION',
    isPaused: true,
    currentTime: Date.now()
  };
};

export const backOneSession = () => {
  clearInterval(timerInterval);
  return {
    type: 'BACK_ONE_SESSION',
    currentTime: Date.now()
  };
};

export const resetTime = () => {
  clearInterval(timerInterval);
  return { type: 'RESET_TIME' };
};

export const toggleAlarmPlaying = () => ({ type: 'TOGGLE_ALARM_PLAYING' });

export const setAppState = nextAppState => (dispatch, getState) => {
  const { isPaused } = getState().timer;
  if (nextAppState === 'active' && !isPaused) {
    timerInterval = setInterval(() => timerTick(dispatch, getState), 2);
  } else if (nextAppState !== 'active') {
    clearInterval(timerInterval);
  }
  dispatch({ type: 'SET_APP_STATE', nextAppState });
};
