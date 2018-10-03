const themes = [
  {
    name: 'Cappuccino',
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
  {
    name: 'Solarized',
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
  {
    name: 'Monochrome',
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
];

export const colors = (
  state = {
    theme: themes[0].name,
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
        theme: themes[action.themeIndex].name,
        themeIndex: action.themeIndex,
        colors: themes[action.themeIndex][state.darkMode ? 'dark' : 'light']
      };
    }

    // case 'NEXT_THEME': {
    //   const index =
    //     state.themeIndex === themes.length - 1 ? 0 : state.themeIndex + 1;
    //   return {
    //     ...state,
    //     theme: themes[index].name,
    //     themeIndex: index,
    //     colors: themes[index][state.darkMode ? 'dark' : 'light']
    //   };
    // }

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
