const themes = {
  coffee: {
    dark: {
      backgroundColor: { backgroundColor: '#3c2f2f' },
      borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
      textColor: { color: '#fff4e6' },
      iconButtonColor: { color: '#be9b7b' },
      buttonTextActive: { color: '#be9b7b' },
      buttonTextInactive: { color: '#fff4e6' }
    },
    light: {
      backgroundColor: { backgroundColor: '#fff4e6' },
      borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
      textColor: { color: '#3c2f2f' },
      iconButtonColor: { color: '#be9b7b' },
      buttonTextActive: { color: '#be9b7b' },
      buttonTextInactive: { color: '#3c2f2f' }
    }
  },
  solarized: {
    dark: {
      backgroundColor: { backgroundColor: '#002b36' },
      borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
      textColor: { color: '#93a1a1' },
      iconButtonColor: { color: '#2aa198' },
      buttonTextActive: { color: '#268bd2' },
      buttonTextInactive: { color: '#586e75' }
    },
    light: {
      backgroundColor: { backgroundColor: '#fdf6e3' },
      borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
      textColor: { color: '#657b83' },
      iconButtonColor: { color: '#2aa198' },
      buttonTextActive: { color: '#268bd2' },
      buttonTextInactive: { color: '#93a1a1' }
    }
  },
  mono: {
    dark: {
      backgroundColor: { backgroundColor: '#000' },
      borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
      textColor: { color: '#ccc' },
      iconButtonColor: { color: '#eee' },
      buttonTextActive: { color: '#eee' },
      buttonTextInactive: { color: '#aaa' }
    },
    light: {
      backgroundColor: { backgroundColor: '#eee' },
      borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
      textColor: { color: '#444' },
      iconButtonColor: { color: '#333' },
      buttonTextActive: { color: '#222' },
      buttonTextInactive: { color: '#666' }
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
