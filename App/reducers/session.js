const initialState = {
  session: 'focus',
  sessionString: 'Focus',
  pomodoro: 1,
  focusTime: 1,
  shortBreakTime: 5,
  longBreakTime: 15
};

export const session = (state = initialState, action) => {
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

    case 'FINISH_SESSION':
      if (state.session !== 'focus') {
        return {
          ...state,
          session: 'focus',
          sessionString: 'Focus',
          pomodoro: state.pomodoro === 4 ? 1 : state.pomodoro + 1
        };
      } else {
        if (state.pomodoro === 4) {
          return {
            ...state,
            session: 'longBreak',
            sessionString: 'Long break'
          };
        } else {
          return {
            ...state,
            session: 'shortBreak',
            sessionString: 'Short break'
          };
        }
      }

    case 'BACK_ONE_SESSION':
      if (state.session === 'focus') {
        if (state.pomodoro === 1) {
          return {
            ...state,
            session: 'longBreak',
            sessionString: 'Long break',
            pomodoro: 4
          };
        } else {
          return {
            ...state,
            session: 'shortBreak',
            sessionString: 'Short break',
            pomodoro: state.pomodoro - 1
          };
        }
      } else {
        return { ...state, session: 'focus', sessionString: 'Focus' };
      }

    case 'RESET_EVERYTHING':
      return {
        ...state,
        session: 'focus',
        sessionString: 'Focus',
        pomodoro: 1
      };

    default:
      return state;
  }
};
