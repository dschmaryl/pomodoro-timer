import { getMillisecs, getMinSecs } from '../utils';

const focusState = { session: 'focus', sessionString: 'Focus' };
const shortBreakState = { session: 'shortBreak', sessionString: 'Short break' };
const longBreakState = { session: 'longBreak', sessionString: 'Long break' };

const initialState = {
  ...focusState,
  pomodoro: 1,
  numPomodoros: 4,
  focusTime: getMillisecs(25),
  shortBreakTime: getMillisecs(5),
  longBreakTime: getMillisecs(15),
  endTime: null,
  timeLeft: null,
  minutes: 25,
  seconds: 0,
  isPaused: true,
  alarmIsPlaying: false,
  tickIsMuted: true,
  appState: 'active'
};

const newSession = (newTime, currentTime, isPaused) => {
  const timeLeft = newTime + (isPaused ? 0 : 800);
  const { minutes, seconds } = getMinSecs(timeLeft);

  return {
    endTime: currentTime + timeLeft,
    timeLeft: timeLeft,
    minutes,
    seconds,
    isPaused: isPaused
  };
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

    case 'SET_NUM_POMODOROS':
      return { ...state, numPomodoros: action.numPomodoros };

    case 'RESET_TIME':
      const time =
        state.session === 'focus'
          ? state.focusTime
          : state.session === 'shortBreak'
          ? state.shortBreakTime
          : state.longBreakTime;

      return {
        ...state,
        ...getMinSecs(time),
        timeLeft: time,
        isPaused: true,
        tickIsMuted: true
      };

    case 'FINISH_SESSION': {
      const { currentTime, isPaused, alarmIsPlaying } = action;
      const commonState = { isPaused, tickIsMuted: true, alarmIsPlaying };

      if (state.session !== 'focus') {
        return {
          ...state,
          ...focusState,
          ...newSession(state.focusTime, currentTime, isPaused),
          ...commonState,
          pomodoro:
            state.pomodoro >= state.numPomodoros ? 1 : state.pomodoro + 1
        };
      } else {
        if (state.pomodoro >= state.numPomodoros) {
          return {
            ...state,
            ...longBreakState,
            ...newSession(state.longBreakTime, currentTime, isPaused),
            ...commonState
          };
        } else {
          return {
            ...state,
            ...shortBreakState,
            ...newSession(state.shortBreakTime, currentTime, isPaused),
            ...commonState
          };
        }
      }
    }

    case 'BACK_ONE_SESSION': {
      const commonState = {
        isPaused: true,
        alarmIsPlaying: false,
        tickIsMuted: true
      };

      if (state.session !== 'focus') {
        return {
          ...state,
          ...focusState,
          ...newSession(state.focusTime, action.currentTime, true),
          ...commonState
        };
      } else {
        if (state.pomodoro === 1) {
          return {
            ...state,
            ...longBreakState,
            ...newSession(state.longBreakTime, action.currentTime, true),
            ...commonState,
            pomodoro: 4
          };
        } else {
          return {
            ...state,
            ...shortBreakState,
            ...newSession(state.shortBreakTime, action.currentTime, true),
            ...commonState,
            pomodoro: state.pomodoro - 1
          };
        }
      }
    }

    case 'TOGGLE_PAUSED':
      if (state.isPaused) {
        const timeLeft =
          state.timeLeft || getMillisecs(state.minutes, state.seconds);
        return {
          ...state,
          isPaused: false,
          endTime: action.currentTime + timeLeft,
          alarmIsPlaying: false
        };
      } else {
        return {
          ...state,
          isPaused: true,
          timeLeft: state.endTime - action.currentTime,
          tickIsMuted: true
        };
      }

    case 'UPDATE_TIME':
      return {
        ...state,
        minutes: action.minutes,
        seconds: action.seconds,
        tickIsMuted: action.tickIsMuted
      };

    case 'TOGGLE_ALARM_PLAYING':
      return { ...state, alarmIsPlaying: !state.alarmIsPlaying };

    case 'SET_APP_STATE':
      return { ...state, appState: action.nextAppState };

    default:
      return state;
  }
};
