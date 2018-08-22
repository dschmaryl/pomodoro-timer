export const sound = (
  state = { soundEnabled: true, volume: 50, soundIsPlaying: false },
  action
) => {
  switch (action.type) {
    case 'TOGGLE_SOUND_ENABLED':
      return { ...state, soundEnabled: !state.soundEnabled };
    case 'INCREASE_VOLUME':
      return { ...state, volume: Math.min(100, state.volume + 5) };
    case 'DECREASE_VOLUME':
      return { ...state, volume: Math.max(0, state.volume - 5) };
    case 'TOGGLE_SOUND_PLAYING':
      return { ...state, soundIsPlaying: !state.soundIsPlaying };

    default:
      return state;
  }
};
