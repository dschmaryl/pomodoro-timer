const focusState = { session: 'focus', sessionString: 'Focus' };
const shortBreakState = { session: 'shortBreak', sessionString: 'Short break' };
const longBreakState = { session: 'longBreak', sessionString: 'Long break' };

const initialState = {
  ...focusState,
  pomodoro: 1,
  focusTime: 1,
  shortBreakTime: 5,
  longBreakTime: 15,
  startMinutes: null,
  endTime: null,
  timeLeft: null,
  minutes: 1,
  seconds: 0,
  isPaused: true
};

const newSession = (newTime, pomodoro, isPaused) => {
  const time = newTime * 60000 + (isPaused ? 0 : 800);
  return {
    endTime: Date.now() + time,
    timeLeft: time,
    minutes: newTime,
    seconds: 0,
    pomodoro: pomodoro,
    isPaused: isPaused
  };
};

export const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TIME':
      switch (action.session) {
        case 'focus':
          return { ...state, focusTime: action.newTime };
        case 'shortBreak':
          return { ...state, shortBreakTime: action.newTime };
        case 'longBreak':
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
        const pomodoro = state.pomodoro === 4 ? 1 : state.pomodoro + 1;
        return {
          ...state,
          ...focusState,
          ...newSession(state.focusTime, pomodoro, action.isPaused)
        };
      } else {
        if (state.pomodoro === 4) {
          return {
            ...state,
            ...longBreakState,
            ...newSession(state.longBreakTime, 4, action.isPaused)
          };
        } else {
          return {
            ...state,
            ...shortBreakState,
            ...newSession(state.shortBreakTime, state.pomodoro, action.isPaused)
          };
        }
      }

    case 'BACK_ONE_SESSION':
      if (state.session === 'focus') {
        if (state.pomodoro === 1) {
          return {
            ...state,
            ...longBreakState,
            ...newSession(state.longBreakTime, 4, true)
          };
        } else {
          return {
            ...state,
            ...shortBreakState,
            ...newSession(state.shortBreakTime, state.pomodoro - 1, true)
          };
        }
      } else {
        return {
          ...state,
          ...focusState,
          ...newSession(state.focusTime, state.pomodoro, true)
        };
      }

    case 'TOGGLE_PAUSED':
      if (state.isPaused) {
        const timeLeft = state.timeLeft
          ? state.timeLeft
          : state.minutes * 60000 + state.seconds * 1000;
        return {
          ...state,
          isPaused: false,
          endTime: Date.now() + timeLeft
        };
      } else {
        return {
          ...state,
          isPaused: true,
          timeLeft: state.endTime - Date.now()
        };
      }

    case 'UPDATE_TIME':
      const { minutes, seconds } = action;
      return { ...state, minutes: minutes, seconds: seconds };

    default:
      return state;
  }
};
