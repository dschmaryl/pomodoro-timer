export const sound = (
  state = { soundIsEnabled: true, volume: 50, soundIsPlaying: false },
  action
) => {
  switch (action.type) {
    case 'TOGGLE_SOUND_ENABLED':
      return { ...state, soundIsEnabled: !state.soundIsEnabled };

    case 'TOGGLE_SOUND_PLAYING':
      return { ...state, soundIsPlaying: !state.soundIsPlaying };

    case 'INCREASE_VOLUME':
      return { ...state, volume: Math.min(100, state.volume + 5) };

    case 'DECREASE_VOLUME':
      return { ...state, volume: Math.max(0, state.volume - 5) };

    default:
      return state;
  }
};
