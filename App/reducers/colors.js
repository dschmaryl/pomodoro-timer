const darkTheme = {
  backgroundColor: { backgroundColor: '#3c2f2f' },
  borderColor: { borderColor: 'rgba(255,255,255,0.2)' },
  textColor: { color: '#fff4e6' },
  iconButtonColor: { color: '#be9b7b' },
  buttonTextActive: { color: '#be9b7b' },
  buttonTextInactive: { color: '#fff4e6' }
};
const lightTheme = {
  backgroundColor: { backgroundColor: '#fff4e6' },
  borderColor: { borderColor: 'rgba(0,0,0,0.2)' },
  textColor: { color: '#3c2f2f' },
  iconButtonColor: { color: '#be9b7b' },
  buttonTextActive: { color: '#be9b7b' },
  buttonTextInactive: { color: '#3c2f2f' }
};

export const colors = (
  state = { theme: 'dark', colors: darkTheme },
  action
) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      const theme = state.theme === 'dark' ? 'light' : 'dark';
      const colors = state.theme === 'dark' ? lightTheme : darkTheme;
      return { ...state, theme: theme, colors: colors };

    default:
      return state;
  }
};
