const initialState = {
  startMinutes: null,
  endTime: null,
  timeLeft: null,
  minutes: null,
  seconds: null,
  isPaused: true
};

export const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TIMER':
      return {
        ...state,
        startMinutes: action.minutes,
        timeLeft: action.minutes * 60000 + action.seconds * 1000,
        endTime: Date.now() + action.minutes * 60000 + action.seconds * 1000,
        minutes: action.minutes,
        seconds: 0
      };

    case 'RESET_TIMER':
      return {
        ...state,
        timeLeft: state.startMinutes * 60000,
        minutes: state.startMinutes,
        seconds: 0,
        isPaused: true
      };

    case 'TOGGLE_PAUSED':
      if (state.isPaused) {
        const endTime = Date.now() + state.timeLeft;
        return {
          ...state,
          isPaused: false,
          endTime: endTime
        };
      } else {
        return {
          ...state,
          isPaused: true,
          timeLeft: state.endTime - Date.now()
        };
      }

    case 'UPDATE_TIME':
      return {
        ...state,
        minutes: action.minutes,
        seconds: action.seconds
      };

    default:
      return state;
  }
};
