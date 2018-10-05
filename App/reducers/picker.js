export const picker = (state = {isVisible: false}, action) => {
  switch (action.type) {
    case 'SHOW_PICKER':
        return { isVisible: !state.isVisible }

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
        return {
          ...state,
          session: 'work',
          sessionString: 'Work'
        };
      }

    case 'RESET_EVERYTHING':
      return initialState;

    default:
      return state;
  }
};
