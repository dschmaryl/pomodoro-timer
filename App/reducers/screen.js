export const screen = (state = { keepScreenAwake: true }, action) => {
  switch (action.type) {
    case 'TOGGLE_KEEP_SCREEN_AWAKE':
      return { keepScreenAwake: !state.keepScreenAwake };

    default:
      return state;
  }
};
