export const times = (
  state = {
    workTime: 1,
    shortBreakTime: 5,
    longBreakTime: 15
  },
  action
) => {
  switch (action.type) {
    case 'DECREASE_WORK_TIME':
      return { ...state, workTime: Math.max(1, state.workTime - 1) };
    case 'INCREASE_WORK_TIME':
      return { ...state, workTime: Math.min(state.workTime + 1, 99) };

    case 'DECREASE_SHORT_BREAK_TIME':
      return {
        ...state,
        shortBreakTime: Math.max(1, state.shortBreakTime - 1)
      };
    case 'INCREASE_SHORT_BREAK_TIME':
      return {
        ...state,
        shortBreakTime: Math.min(state.shortBreakTime + 1, 99)
      };

    case 'DECREASE_LONG_BREAK_TIME':
      return {
        ...state,
        longBreakTime: Math.max(1, state.longBreakTime - 1)
      };

    case 'INCREASE_LONG_BREAK_TIME':
      return {
        ...state,
        longBreakTime: Math.min(state.longBreakTime + 1, 99)
      };

    default:
      return state;
  }
};
