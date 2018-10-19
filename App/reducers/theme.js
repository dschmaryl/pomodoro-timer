const colors = [
  {
    name: 'Cappuccino',
    dark: {
      backgroundColor: { backgroundColor: '#3c2f2f' },
      borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
      textColor: { color: '#fff4e6' },
      buttonColor: { color: '#be9b7b' },
      disabledColor: { color: 'rgba(255,255,255,0.2)' }
    },
    light: {
      backgroundColor: { backgroundColor: '#fff4e6' },
      borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
      textColor: { color: '#3c2f2f' },
      buttonColor: { color: '#be9b7b' },
      disabledColor: { color: 'rgba(0,0,0,0.2)' }
    }
  },
  {
    name: 'Solarized',
    dark: {
      backgroundColor: { backgroundColor: '#002b36' },
      borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
      textColor: { color: '#93a1a1' },
      buttonColor: { color: '#2aa198' },
      disabledColor: { color: 'rgba(255,255,255,0.2)' }
    },
    light: {
      backgroundColor: { backgroundColor: '#fdf6e3' },
      borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
      textColor: { color: '#657b83' },
      buttonColor: { color: '#2aa198' },
      disabledColor: { color: 'rgba(0,0,0,0.2)' }
    }
  },
  {
    name: 'Monochrome',
    dark: {
      backgroundColor: { backgroundColor: '#000000' },
      borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
      textColor: { color: '#aaaaaa' },
      buttonColor: { color: '#eeeeee' },
      disabledColor: { color: 'rgba(255,255,255,0.2)' }
    },
    light: {
      backgroundColor: { backgroundColor: '#eeeeee' },
      borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
      textColor: { color: '#777777' },
      buttonColor: { color: '#333333' },
      disabledColor: { color: 'rgba(0,0,0,0.2)' }
    }
  }
];

export const theme = (
  state = {
    themeName: colors[0].name,
    themeIndex: 0,
    darkMode: true,
    colors: colors[0].dark
  },
  action
) => {
  switch (action.type) {
    case 'SET_THEME': {
      return {
        ...state,
        themeName: colors[action.themeIndex].name,
        themeIndex: action.themeIndex,
        colors: colors[action.themeIndex][state.darkMode ? 'dark' : 'light']
      };
    }

    case 'TOGGLE_DARK_MODE': {
      const darkMode = !state.darkMode;
      return {
        ...state,
        darkMode: darkMode,
        colors: colors[state.themeIndex][darkMode ? 'dark' : 'light']
      };
    }

    default:
      return state;
  }
};
