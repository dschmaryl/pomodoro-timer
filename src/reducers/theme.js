import { themes } from '../themes';

export const theme = (
  state = {
    themeName: themes[0].name,
    themeIndex: 0,
    darkMode: true,
    colors: themes[0].dark
  },
  action
) => {
  switch (action.type) {
    case 'SET_THEME': {
      return {
        ...state,
        themeName: themes[action.themeIndex].name,
        themeIndex: action.themeIndex,
        colors: themes[action.themeIndex][state.darkMode ? 'dark' : 'light']
      };
    }

    case 'TOGGLE_DARK_MODE': {
      const darkMode = !state.darkMode;
      return {
        ...state,
        darkMode: darkMode,
        colors: themes[state.themeIndex][darkMode ? 'dark' : 'light']
      };
    }

    default:
      return state;
  }
};
