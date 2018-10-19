export const sound = (state = { soundIsPlaying: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_SOUND_PLAYING':
      return { soundIsPlaying: !state.soundIsPlaying };

    default:
      return state;
  }
};
