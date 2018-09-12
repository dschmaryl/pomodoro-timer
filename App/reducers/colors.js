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
  state = { theme: 'coffee', lightDark: 'dark', colors: themes.coffee.dark },
  action
) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.theme,
        colors: themes[action.theme][state.lightDark]
      };

    case 'TOGGLE_LIGHT_DARK':
      const lightDark = state.lightDark === 'dark' ? 'light' : 'dark';
      return {
        ...state,
        lightDark: lightDark,
        colors: themes[state.theme][lightDark]
      };

    default:
      return state;
  }
};

// export const colors = (
//   state = {
//     // theme: 'coffee',
//     themeIndex: 0,
//     lightDark: 'dark',
//     colors: themes[0].dark
//   },
//   action
// ) => {
//   switch (action.type) {
//     // case 'SET_THEME':
//     //   return {
//     //     ...state,
//     //     theme: action.theme,
//     //     colors: themes[action.theme][state.lightDark]
//     //   };

//     case 'SET_THEME_INDEX':
//       return {
//         ...state,
//         themeIndex: action.themeIndex,
//         colors: themes[action.themeIndex][state.lightDark]
//       };

//     case 'TOGGLE_LIGHT_DARK':
//       const lightDark = state.lightDark === 'dark' ? 'light' : 'dark';
//       return {
//         ...state,
//         lightDark: lightDark,
//         colors: themes[state.themeIndex][lightDark]
//       };

//     default:
//       return state;
//   }
// };

// const themes = [
//   // cappuccino
//   {
//     dark: {
//       backgroundColor: { backgroundColor: '#3c2f2f' },
//       borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
//       textColor: { color: '#fff4e6' },
//       iconButtonColor: { color: '#be9b7b' },
//       buttonTextActive: { color: '#be9b7b' },
//       buttonTextInactive: { color: '#fff4e6' }
//     },
//     light: {
//       backgroundColor: { backgroundColor: '#fff4e6' },
//       borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
//       textColor: { color: '#3c2f2f' },
//       iconButtonColor: { color: '#be9b7b' },
//       buttonTextActive: { color: '#be9b7b' },
//       buttonTextInactive: { color: '#3c2f2f' }
//     }
//   },
//   // solarized
//   {
//     dark: {
//       backgroundColor: { backgroundColor: '#002b36' },
//       borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
//       textColor: { color: '#93a1a1' },
//       iconButtonColor: { color: '#2aa198' },
//       buttonTextActive: { color: '#268bd2' },
//       buttonTextInactive: { color: '#586e75' }
//     },
//     light: {
//       backgroundColor: { backgroundColor: '#fdf6e3' },
//       borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
//       textColor: { color: '#657b83' },
//       iconButtonColor: { color: '#2aa198' },
//       buttonTextActive: { color: '#268bd2' },
//       buttonTextInactive: { color: '#93a1a1' }
//     }
//   },
//   // mono
//   {
//     dark: {
//       backgroundColor: { backgroundColor: '#000' },
//       borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
//       textColor: { color: '#ccc' },
//       iconButtonColor: { color: '#eee' },
//       buttonTextActive: { color: '#eee' },
//       buttonTextInactive: { color: '#aaa' }
//     },
//     light: {
//       backgroundColor: { backgroundColor: '#eee' },
//       borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
//       textColor: { color: '#444' },
//       iconButtonColor: { color: '#333' },
//       buttonTextActive: { color: '#222' },
//       buttonTextInactive: { color: '#666' }
//     }
//   }
// ];
