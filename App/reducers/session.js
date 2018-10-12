const initialState = {
  session: 'work',
  sessionString: 'Work',
  pomodoro: 1,
  pauseAtSessionEnd: true
};

export const session = (state = initialState, action) => {
  switch (action.type) {
    case 'FINISH_SESSION':
      if (state.session !== 'work') {
        return {
          session: 'work',
          sessionString: 'Work',
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
      if (state.session === 'work') {
        if (state.pomodoro === 1) {
          return {
            session: 'longBreak',
            sessionString: 'Long break',
            pomodoro: 4
          };
        } else {
          return {
            session: 'shortBreak',
            sessionString: 'Short break',
            pomodoro: state.pomodoro - 1
          };
        }
      } else {
        return { ...state, session: 'work', sessionString: 'Work' };
      }

    case 'RESET_EVERYTHING':
      return { ...state, session: 'work', sessionString: 'Work', pomodoro: 1 };

    case 'TOGGLE_PAUSE_AT_SESSION_END':
      return { ...state, pauseAtSessionEnd: !state.pauseAtSessionEnd };

    default:
      return state;
  }
};
