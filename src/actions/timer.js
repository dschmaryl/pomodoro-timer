import BackgroundTimer from 'react-native-background-timer';

const TIMER_INTERVAL = 1000;

let timerInterval;

const timerTick = (dispatch, getState) => {
  const { minutes, seconds } = getState().timer;
  let newSeconds, newMinutes;

  if (seconds === 1) {
    if (minutes === 0) {
      const { pauseAtSessionEnd, alarmIsEnabled } = getState().settings;
      if (pauseAtSessionEnd) BackgroundTimer.clearInterval(timerInterval);
      return dispatch({
        type: 'FINISH_SESSION',
        isPaused: pauseAtSessionEnd,
        alarmIsPlaying: alarmIsEnabled
      });
    } else {
      newMinutes = minutes - 1;
      newSeconds = 59;
    }
  } else {
    newMinutes = minutes;
    newSeconds = seconds === 0 ? 59 : seconds - 1;
  }

  return dispatch({
    type: 'UPDATE_TIME',
    minutes: newMinutes,
    seconds: newSeconds
  });
};

export const togglePaused = () => (dispatch, getState) => {
  BackgroundTimer.clearInterval(timerInterval);
  const { isPaused } = getState().timer;
  if (isPaused) {
    timerTick(dispatch, getState);
    timerInterval = BackgroundTimer.setInterval(
      () => timerTick(dispatch, getState),
      TIMER_INTERVAL
    );
  }
  return dispatch({ type: 'TOGGLE_PAUSED' });
};

export const nextSession = () => {
  BackgroundTimer.clearInterval(timerInterval);
  return { type: 'FINISH_SESSION', isPaused: true };
};

export const backOneSession = () => {
  BackgroundTimer.clearInterval(timerInterval);
  return { type: 'BACK_ONE_SESSION' };
};

export const resetTime = () => {
  BackgroundTimer.clearInterval(timerInterval);
  return { type: 'RESET_TIME' };
};

export const toggleAlarmPlaying = () => ({ type: 'TOGGLE_ALARM_PLAYING' });

export const setAppState = nextAppState => (dispatch, getState) => {
  const { timer, settings } = getState();
  if (nextAppState !== 'active') {
    if (!settings.runInBackground && !timer.isPaused) {
      dispatch(togglePaused());
    }
  }

  return dispatch({
    type: 'SET_APP_STATE',
    nextAppState,
    alarmIsPlaying: timer.alarmIsPlaying && settings.runInBackground
  });
};
