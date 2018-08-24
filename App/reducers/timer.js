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
        const endTime = Date.now() + state.timeLeft;
        return {
          ...state,
          isPaused: false,
          endTime: endTime,
          offSet: endTime % 1000
        };
      } else {
        return {
          ...state,
          isPaused: true,
          timeLeft: state.endTime - Date.now()
        };
      }

    case 'TIMER_TICK':
      if (state.isPaused) {
        return state;
      } else {
        const timeLeft = state.endTime - Date.now();
        if (timeLeft < 10) {
          return {
            ...state,
            isFinished: true,
            isPaused: true,
            timeLeft: null
          };
        } else if (Math.abs((timeLeft % 1000) - state.offSet) <= 10) {
          return { ...state, timeLeft: timeLeft };
        } else {
          return state;
        }
      }

    default:
      return state;
  }
};
