export const picker = (
  state = {
    timePickerVisible: false,
    session: null,
    oldTime: null,
    volumePickerVisible: false,
    oldVolume: null
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

    case 'SHOW_VOLUME_PICKER':
      return {
        ...state,
        volumePickerVisible: true,
        oldVolume: action.oldVolume
      };

    case 'HIDE_VOLUME_PICKER':
      return { ...state, volumePickerVisible: false };

    case 'SHOW_THEME_PICKER':
      return { ...state, themePickerVisible: true };

    case 'HIDE_THEME_PICKER':
      return { ...state, themePickerVisible: false };

    default:
      return state;
  }
};
