export const settings = (
  state = {
    pauseAtSessionEnd: true,
    showPauseButton: true,
    notificationIsEnabled: true,
    soundIsEnabled: true,
    volume: 50,
    keepScreenAwake: true,
    showStart: false,
    firstRun: true
  },
  action
) => {
  switch (action.type) {
    case 'TOGGLE_PAUSE_AT_SESSION_END':
      return { ...state, pauseAtSessionEnd: !state.pauseAtSessionEnd };

    case 'TOGGLE_SHOW_PAUSE_BUTTON':
      return { ...state, showPauseButton: !state.showPauseButton };

    case 'TOGGLE_NOTIFICATION_ENABLED':
      return { ...state, notificationIsEnabled: !state.notificationIsEnabled };

    case 'TOGGLE_SOUND_ENABLED':
      return { ...state, soundIsEnabled: !state.soundIsEnabled };

    case 'SET_VOLUME':
      return { ...state, volume: action.volume };

    case 'TOGGLE_KEEP_SCREEN_AWAKE':
      return { ...state, keepScreenAwake: !state.keepScreenAwake };

    case 'TOGGLE_SHOW_START':
      return { ...state, showStart: !state.showStart };

    case 'TOGGLE_FIRST_RUN':
      return { ...state, firstRun: !state.firstRun };

    default:
      return state;
  }
};
