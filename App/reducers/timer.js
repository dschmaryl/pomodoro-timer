const initialState = {
  minutes: null,
  endTime: null,
  timeLeft: null,
  isPaused: true,
  isFinished: false
};

export const timer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TIMER':
      return {
        ...state,
        isFinished: false,
        minutes: action.minutes,
        timeLeft: action.minutes * 60000
      };

    case 'RESET_TIMER':
      return {
        ...state,
        isFinished: false,
        isPaused: true,
        timeLeft: state.minutes * 60000
      };

    case 'TOGGLE_PAUSED':
      if (state.isPaused) {
        return {
          ...state,
          isPaused: false,
          endTime: new Date().getTime() + state.timeLeft
        };
      } else {
        return {
          ...state,
          isPaused: true,
          timeLeft: state.endTime - new Date().getTime()
        };
      }

    case 'TIMER_TICK':
      if (state.isPaused) {
        return state;
      } else {
        const timeLeft = state.endTime - new Date().getTime();
        if (timeLeft < 1000) {
          return {
            ...state,
            isFinished: true,
            isPaused: true,
            timeLeft: timeLeft
          };
        } else {
          return { ...state, timeLeft: timeLeft };
        }
      }

    default:
      return state;
  }
};
