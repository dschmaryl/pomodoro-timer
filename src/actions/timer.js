import BackgroundTimer from 'react-native-background-timer';
import { getMin, getSec } from '../utils';

const INTERVAL_LENGTH = 10;

let timerInterval;

let tickIsMuted = true;
let pauseForAlarm = false;

const startTimer = (dispatch, getState) => {
  const { runInBackground } = getState().settings;

  if (runInBackground) {
    timerInterval = BackgroundTimer.setInterval(
      () => timerTick(dispatch, getState),
      INTERVAL_LENGTH
    );
  } else {
    timerInterval = setInterval(
      () => timerTick(dispatch, getState),
      INTERVAL_LENGTH
    );
  }
};

const stopTimer = () => {
  tickIsMuted = true;
  clearInterval(timerInterval);
  BackgroundTimer.clearInterval(timerInterval);
};

export const changeIntervalType = () => (dispatch, getState) => {
  if (!getState().timer.isPaused) {
    stopTimer();
    tickIsMuted = false;
    setTimeout(() => startTimer(dispatch, getState), 20);
  }
};

const timerTick = (dispatch, getState) => {
  const state = getState();
  const { endTime, seconds, alarmIsPlaying } = state.timer;

  if (alarmIsPlaying) {
    pauseForAlarm = true;
    tickIsMuted = true;
  } else if (pauseForAlarm) {
    pauseForAlarm = false;
    setTimeout(() => {
      tickIsMuted = false;
    }, 800);
  }

  const time = endTime - Date.now();
  if (time < 1000) {
    // end of session
    const { pauseAtSessionEnd, alarmIsEnabled } = state.settings;
    if (pauseAtSessionEnd) stopTimer();
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
        seconds: newSeconds,
        tickIsMuted: tickIsMuted
      });
    }
  }
};

export const togglePaused = () => (dispatch, getState) => {
  stopTimer();
  if (getState().timer.isPaused) {
    tickIsMuted = false;
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
  stopTimer();
  const { timer, settings } = getState();

  if (nextAppState !== 'active') {
    if (settings.runInBackground && !timer.isPaused) {
      tickIsMuted = false;
      startTimer(dispatch, getState);
    } else if (
      !settings.runInBackground &&
      !settings.notificationIsEnabled &&
      !timer.isPaused
    ) {
      dispatch(togglePaused());
    }
  } else {
    // came back from background
    tickIsMuted = true;
    if (!timer.isPaused) {
      setTimeout(() => {
        tickIsMuted = false;
      }, 600);
      startTimer(dispatch, getState);
    }
  }

  return dispatch({ type: 'SET_APP_STATE', nextAppState });
};
