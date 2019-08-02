import BackgroundTimer from 'react-native-background-timer';
import { getMin, getSec, getMinSecs } from '../utils';

const INTERVAL_LENGTH = 2;

let timerInterval;

const timerTick = (dispatch, getState) => {
  const { endTime, seconds } = getState().timer;
  const time = endTime - Date.now();
  if (time < 1000) {
    // end of session
    const { pauseAtSessionEnd } = getState().settings;
    if (pauseAtSessionEnd) BackgroundTimer.clearInterval(timerInterval);
    return dispatch({
      type: 'FINISH_SESSION',
      isPaused: pauseAtSessionEnd,
      currentTime: Date.now(),
      sessionEnded: true
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
  BackgroundTimer.clearInterval(timerInterval);

  if (getState().timer.isPaused) {
    timerInterval = BackgroundTimer.setInterval(
      () => timerTick(dispatch, getState),
      INTERVAL_LENGTH
    );
  }

  return dispatch({ type: 'TOGGLE_PAUSED', currentTime: Date.now() });
};

export const nextSession = () => {
  BackgroundTimer.clearInterval(timerInterval);
  return { type: 'FINISH_SESSION', isPaused: true, currentTime: Date.now() };
};

export const backOneSession = () => {
  BackgroundTimer.clearInterval(timerInterval);
  return { type: 'BACK_ONE_SESSION', currentTime: Date.now() };
};

export const resetTime = () => {
  BackgroundTimer.clearInterval(timerInterval);
  return { type: 'RESET_TIME' };
};

export const toggleSessionEnded = () => ({ type: 'TOGGLE_SESSION_ENDED' });

export const setAppState = nextAppState => (dispatch, getState) => {
  const { timer, settings } = getState();
  if (nextAppState !== 'active') {
    if (!timer.isPaused) {
      if (!settings.runInBackground && !settings.notificationIsEnabled) {
        // both background options are disabled, so pause
        dispatch(togglePaused());
      }
    }
  } else {
    if (!timerInterval && !timer.isPaused) {
      if (settings.runInBackground || settings.notificationIsEnabled) {
        // check endTime and restart timer
        const { minutes, seconds } = getMinSecs(timer.endTime - Date.now());
        if (minutes < 0 || seconds < 0) {
          // finished while in background
          dispatch({
            type: 'FINISH_SESSION',
            isPaused: settings.pauseAtSessionEnd,
            sessionEnded: false
          });
          if (!settings.pauseAtSessionEnd) {
            timerInterval = BackgroundTimer.setInterval(
              () => timerTick(dispatch, getState),
              INTERVAL_LENGTH
            );
          }
        } else {
          dispatch({ type: 'UPDATE_TIME', minutes, seconds });
          timerInterval = BackgroundTimer.setInterval(
            () => timerTick(dispatch, getState),
            INTERVAL_LENGTH
          );
        }
      } else {
        // should be paused, so pause it
        dispatch({ type: 'TOGGLE_PAUSED' });
      }
    }
  }

  return dispatch({ type: 'SET_APP_STATE', nextAppState });
};
