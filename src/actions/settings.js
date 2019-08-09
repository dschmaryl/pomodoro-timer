import { changeIntervalType } from './timer';

export const togglePauseAtSessionEnd = () => ({
  type: 'TOGGLE_PAUSE_AT_SESSION_END'
});

export const toggleShowPauseButton = () => ({
  type: 'TOGGLE_SHOW_PAUSE_BUTTON'
});

export const toggleRunInBackground = () => dispatch => {
  dispatch({
    type: 'TOGGLE_RUN_IN_BACKGROUND'
  });
  return dispatch(changeIntervalType());
};

export const toggleNotificationEnabled = () => dispatch => {
  dispatch({
    type: 'TOGGLE_NOTIFICATION_ENABLED'
  });
  return dispatch(changeIntervalType());
};

export const toggleAlarmEnabled = () => ({ type: 'TOGGLE_ALARM_ENABLED' });

export const toggleAlarmRepeat = () => ({ type: 'TOGGLE_ALARM_REPEAT' });

export const toggleTickEnabled = () => ({ type: 'TOGGLE_TICK_ENABLED' });

export const toggleKeepScreenAwake = () => ({
  type: 'TOGGLE_KEEP_SCREEN_AWAKE'
});

export const setFirstRunToFalse = () => ({ type: 'SET_FIRST_RUN_TO_FALSE' });

export const toggleDarkMode = () => ({ type: 'TOGGLE_DARK_MODE' });
