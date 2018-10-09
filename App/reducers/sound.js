export const sound = (
  state = {
    soundIsEnabled: true,
    soundIsPlaying: false,
    volumePickerVisible: false,
    volume: 50
  },
  action
) => {
  switch (action.type) {
    case 'TOGGLE_SOUND_ENABLED':
      return { ...state, soundIsEnabled: !state.soundIsEnabled };

    case 'TOGGLE_SOUND_PLAYING':
      return { ...state, soundIsPlaying: !state.soundIsPlaying };

    case 'SHOW_VOLUME_PICKER':
      return { ...state, volumePickerVisible: true };

    case 'HIDE_VOLUME_PICKER':
      return { ...state, volumePickerVisible: false };

    case 'SET_VOLUME':
      return { ...state, volume: action.volume };

    default:
      return state;
  }
};
