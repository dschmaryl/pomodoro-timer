import { getMillisecs, getMinSecs } from '../utils';

const focusState = { session: 'focus', sessionString: 'Focus' };
const shortBreakState = { session: 'shortBreak', sessionString: 'Short break' };
const longBreakState = { session: 'longBreak', sessionString: 'Long break' };

const initialState = {
  ...focusState,
  pomodoro: 1,
  focusTime: getMillisecs(25),
  shortBreakTime: getMillisecs(5),
  longBreakTime: getMillisecs(15),
  minutes: 25,
  seconds: 0,
  isPaused: true,
  alarmIsPlaying: false,
  appState: 'active'
};

const newSession = newTime => {
  const { minutes, seconds } = getMinSecs(newTime);
  return { minutes, seconds };
};

export const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TIME':
      switch (action.timeType) {
        case 'focusTime':
          return { ...state, focusTime: action.newTime };
        case 'shortBreakTime':
          return { ...state, shortBreakTime: action.newTime };
        case 'longBreakTime':
          return { ...state, longBreakTime: action.newTime };
        default:
          return state;
      }

    case 'RESET_TIME':
      const time =
        state.session === 'focus'
          ? state.focusTime
          : state.session === 'shortBreak'
          ? state.shortBreakTime
          : state.longBreakTime;

      return { ...state, ...getMinSecs(time), isPaused: true };

    case 'FINISH_SESSION':
      if (state.session !== 'focus') {
        return {
          ...state,
          ...focusState,
          ...getMinSecs(state.focusTime),
          isPaused: action.isPaused,
          alarmIsPlaying: action.alarmIsPlaying,
          pomodoro: state.pomodoro === 4 ? 1 : state.pomodoro + 1
        };
      } else {
        if (state.pomodoro === 4) {
          return {
            ...state,
            ...longBreakState,
            ...getMinSecs(state.longBreakTime),
            isPaused: action.isPaused,
            alarmIsPlaying: action.alarmIsPlaying
          };
        } else {
          return {
            ...state,
            ...shortBreakState,
            ...getMinSecs(state.shortBreakTime),
            isPaused: action.isPaused,
            alarmIsPlaying: action.alarmIsPlaying
          };
        }
      }

    case 'BACK_ONE_SESSION':
      if (state.session !== 'focus') {
        return {
          ...state,
          ...focusState,
          ...getMinSecs(state.focusTime),
          isPaused: true
        };
      } else {
        if (state.pomodoro === 1) {
          return {
            ...state,
            ...longBreakState,
            ...getMinSecs(state.longBreakTime),
            isPaused: true,
            pomodoro: 4
          };
        } else {
          return {
            ...state,
            ...shortBreakState,
            ...getMinSecs(state.shortBreakTime),
            isPaused: true,
            pomodoro: state.pomodoro - 1
          };
        }
      }

    case 'TOGGLE_PAUSED':
      if (state.isPaused) {
        return {
          ...state,
          isPaused: false,
          alarmIsPlaying: false
        };
      } else {
        return {
          ...state,
          isPaused: true
        };
      }

    case 'UPDATE_TIME':
      return { ...state, minutes: action.minutes, seconds: action.seconds };

    case 'TOGGLE_ALARM_PLAYING':
      return { ...state, alarmIsPlaying: !state.alarmIsPlaying };

    case 'SET_APP_STATE':
      return {
        ...state,
        appState: action.nextAppState,
        alarmIsPlaying: action.alarmIsPlaying
      };

    default:
      return state;
  }
};
