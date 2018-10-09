export const times = (
  state = {
    workTime: 1,
    shortBreakTime: 5,
    longBreakTime: 15,
    timePickerVisible: false,
    session: null,
    oldTime: null
  },
  action
) => {
  switch (action.type) {
    case 'SHOW_TIME_PICKER':
      return {
        ...state,
        timePickerVisible: true,
        session: action.session,
        oldTime: action.oldTime
      };

    case 'HIDE_TIME_PICKER':
      return { ...state, timePickerVisible: false };

    case 'SET_TIME':
      switch (state.session) {
        case 'work':
          return { ...state, workTime: action.newTime };
        case 'shortBreak':
          return { ...state, shortBreakTime: action.newTime };
        case 'longBreak':
          return { ...state, longBreakTime: action.newTime };
        default:
          return state;
      }

    default:
      return state;
  }
};
