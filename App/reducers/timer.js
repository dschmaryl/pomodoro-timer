const focusState = { session: 'focus', sessionString: 'Focus' };
const shortBreakState = { session: 'shortBreak', sessionString: 'Short break' };
const longBreakState = { session: 'longBreak', sessionString: 'Long break' };

const initialState = {
  ...focusState,
  pomodoro: 1,
  focusTime: 25,
  shortBreakTime: 5,
  longBreakTime: 15,
  endTime: null,
  timeLeft: null,
  minutes: 25,
  seconds: 0,
  isPaused: true,
  alarmIsPlaying: false,
  appIsActive: true
};

const newSession = (newTime, currentTime, isPaused) => {
  const timeLeft = newTime * 60000 + (isPaused ? 0 : 800);
  return {
    endTime: currentTime + timeLeft,
    timeLeft: timeLeft,
    minutes: newTime,
    seconds: 0,
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

    case 'RESET_TIME':
      const time =
        state.session === 'focus'
          ? state.focusTime
          : state.session === 'shortBreak'
            ? state.shortBreakTime
            : state.longBreakTime;
      return {
        ...state,
        timeLeft: time * 60000,
        minutes: time,
        seconds: 0,
        isPaused: true
      };

    case 'FINISH_SESSION':
      if (state.session !== 'focus') {
        return {
          ...state,
          ...focusState,
          ...newSession(state.focusTime, action.currentTime, action.isPaused),
          pomodoro: state.pomodoro === 4 ? 1 : state.pomodoro + 1,
          alarmIsPlaying: action.alarmIsPlaying
        };
      } else {
        if (state.pomodoro === 4) {
          return {
            ...state,
            ...longBreakState,
            ...newSession(
              state.longBreakTime,
              action.currentTime,
              action.isPaused
            ),
            alarmIsPlaying: action.alarmIsPlaying
          };
        } else {
          return {
            ...state,
            ...shortBreakState,
            ...newSession(
              state.shortBreakTime,
              action.currentTime,
              action.isPaused
            ),
            alarmIsPlaying: action.alarmIsPlaying
          };
        }
      }

    case 'BACK_ONE_SESSION':
      if (state.session !== 'focus') {
        return {
          ...state,
          ...focusState,
          ...newSession(state.focusTime, action.currentTime, true)
        };
      } else {
        if (state.pomodoro === 1) {
          return {
            ...state,
            ...longBreakState,
            ...newSession(state.longBreakTime, action.currentTime, true),
            pomodoro: 4
          };
        } else {
          return {
            ...state,
            ...shortBreakState,
            ...newSession(state.shortBreakTime, action.currentTime, true),
            pomodoro: state.pomodoro - 1
          };
        }
      }

    case 'TOGGLE_PAUSED':
      if (state.isPaused) {
        const timeLeft = state.timeLeft
          ? state.timeLeft
          : state.minutes * 60000 + state.seconds * 1000;
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
          timeLeft: state.endTime - action.currentTime
        };
      }

    case 'UPDATE_TIME':
      return { ...state, minutes: action.minutes, seconds: action.seconds };

    case 'TOGGLE_ALARM_PLAYING':
      return { ...state, alarmIsPlaying: !state.alarmIsPlaying };

    case 'TOGGLE_APP_STATE':
      return {
        ...state,
        appIsActive: !state.appIsActive,
        alarmIsPlaying: false
      };

    default:
      return state;
  }
};
