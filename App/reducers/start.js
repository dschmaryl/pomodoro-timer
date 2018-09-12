export const start = (state = { showStart: false, firstRun: true }, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_START':
      return { ...state, showStart: !state.showStart };

    case 'TOGGLE_FIRST_RUN':
      return { ...state, firstRun: !state.firstRun };

    default:
      return state;
  }
};
