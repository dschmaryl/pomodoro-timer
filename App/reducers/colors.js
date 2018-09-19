const themes = {
  coffee: {
    dark: {
      backgroundColor: { backgroundColor: '#3c2f2f' },
      borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
      textColor: { color: '#fff4e6' },
      buttonColor: { color: '#be9b7b' }
    },
    light: {
      backgroundColor: { backgroundColor: '#fff4e6' },
      borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
      textColor: { color: '#3c2f2f' },
      buttonColor: { color: '#be9b7b' }
    }
  },
  solarized: {
    dark: {
      backgroundColor: { backgroundColor: '#002b36' },
      borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
      textColor: { color: '#93a1a1' },
      buttonColor: { color: '#2aa198' }
    },
    light: {
      backgroundColor: { backgroundColor: '#fdf6e3' },
      borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
      textColor: { color: '#657b83' },
      buttonColor: { color: '#2aa198' }
    }
  },
  mono: {
    dark: {
      backgroundColor: { backgroundColor: '#000' },
      borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
      textColor: { color: '#aaa' },
      buttonColor: { color: '#eee' }
    },
    light: {
      backgroundColor: { backgroundColor: '#eee' },
      borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
      textColor: { color: '#777' },
      buttonColor: { color: '#333' }
    }
  }
};

export const colors = (
  state = { theme: 'coffee', darkMode: true, colors: themes.coffee.dark },
  action
) => {
  switch (action.type) {
    case 'SET_THEME': {
      const mode = state.darkMode ? 'dark' : 'light';
      return {
        ...state,
        theme: action.theme,
        colors: themes[action.theme][mode]
      };
    }

    case 'TOGGLE_DARK_MODE': {
      const darkMode = !state.darkMode;
      const mode = darkMode ? 'dark' : 'light';
      return {
        ...state,
        darkMode: darkMode,
        colors: themes[state.theme][mode]
      };
    }

    default:
      return state;
  }
};
