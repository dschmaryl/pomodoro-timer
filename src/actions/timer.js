import BackgroundTimer from 'react-native-background-timer';
import { getMin, getSec } from '../utils';

const INTERVAL_LENGTH = 2;

let timerInterval;

const startTimer = (dispatch, getState) => {
  timerInterval = BackgroundTimer.setInterval(
    () => timerTick(dispatch, getState),
    INTERVAL_LENGTH
  );
};

const stopTimer = () => {
  BackgroundTimer.clearInterval(timerInterval);
};

const timerTick = (dispatch, getState) => {
  const { endTime, seconds } = getState().timer;
  const time = endTime - Date.now();
  if (time < 1000) {
    // end of session
    const { pauseAtSessionEnd, alarmIsEnabled } = getState().settings;
    if (pauseAtSessionEnd) BackgroundTimer.clearInterval(timerInterval);
    return dispatch({
      type: 'FINISH_SESSION',
      isPaused: pauseAtSessionEnd,
      currentTime: Date.now(),
      alarmIsPlaying: alarmIsEnabled && time > 0 // timer was not in background
    });
  } else {
    // check to see if a full second has passed
    const newSeconds = getSec(time);
    if (newSeconds != seconds) {
      return dispatch({
        type: 'UPDATE_TIME',
        minutes: getMin(time),
        seconds: newSeconds
      });
    }
  }
};

export const togglePaused = () => (dispatch, getState) => {
  stopTimer();
  if (getState().timer.isPaused) {
    startTimer(dispatch, getState);
  }
  return dispatch({ type: 'TOGGLE_PAUSED', currentTime: Date.now() });
};

export const nextSession = () => {
  stopTimer();
  return { type: 'FINISH_SESSION', isPaused: true, currentTime: Date.now() };
};

export const backOneSession = () => {
  stopTimer();
  return { type: 'BACK_ONE_SESSION', currentTime: Date.now() };
};

export const resetTime = () => {
  stopTimer();
  return { type: 'RESET_TIME' };
};

export const toggleAlarmIsPlaying = () => ({ type: 'TOGGLE_ALARM_PLAYING' });

export const setAppState = nextAppState => (dispatch, getState) => {
  const { timer, settings } = getState();

  if (nextAppState !== 'active') {
    if (!settings.runInBackground) {
      stopTimer();

      if (!settings.notificationIsEnabled) {
        if (!timer.isPaused) dispatch(togglePaused());
      }
    }
  } else if (timer.appState !== 'active') {
    // came back to active
    if (!timer.isPaused && !settings.runInBackground) {
      const currentTime = Date.now();

      if (timer.endTime - currentTime < 0) {
        // timer finished in background

        dispatch({
          type: 'FINISH_SESSION',
          isPaused: settings.pauseAtSessionEnd,
          currentTime
        });

        if (!settings.pauseAtSessionEnd) startTimer(dispatch, getState);
      } else {
        startTimer(dispatch, getState);
      }
    }
  }

  return dispatch({ type: 'SET_APP_STATE', nextAppState });
};
