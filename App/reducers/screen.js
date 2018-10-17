export const screen = (
  state = { keepScreenAwake: true, showPauseButton: true },
  action
) => {
  switch (action.type) {
    case 'TOGGLE_KEEP_SCREEN_AWAKE':
      return { ...state, keepScreenAwake: !state.keepScreenAwake };

    case 'TOGGLE_SHOW_PAUSE_BUTTON':
      return { ...state, showPauseButton: !state.showPauseButton };

    default:
      return state;
  }
};
