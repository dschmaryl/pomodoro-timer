import { themes } from '../themes';

export const settings = (
  state = {
    pauseAtSessionEnd: true,
    showPauseButton: true,
    notificationIsEnabled: true,
    alarmIsEnabled: true,
    alarmVolume: 50,
    alarmSoundIndex: 0,
    tickIsEnabled: false,
    tickVolume: 50,
    keepScreenAwake: true,
    themeIndex: 0,
    darkMode: true,
    colors: themes[0].dark,
    firstRun: true
  },
  action
) => {
  switch (action.type) {
    case 'TOGGLE_PAUSE_AT_SESSION_END':
      return { ...state, pauseAtSessionEnd: !state.pauseAtSessionEnd };

    case 'TOGGLE_SHOW_PAUSE_BUTTON':
      return { ...state, showPauseButton: !state.showPauseButton };

    case 'TOGGLE_NOTIFICATION_ENABLED':
      return { ...state, notificationIsEnabled: !state.notificationIsEnabled };

    case 'TOGGLE_ALARM_ENABLED':
      return { ...state, alarmIsEnabled: !state.alarmIsEnabled };

    case 'SET_ALARM_SOUND':
      return { ...state, alarmSoundIndex: action.alarmSoundIndex };

    case 'TOGGLE_TICK_ENABLED':
      return { ...state, tickIsEnabled: !state.tickIsEnabled };

    case 'SET_VOLUME':
      if (action.soundType === 'alarmVolume') {
        return { ...state, alarmVolume: action.volume };
      } else {
        return { ...state, tickVolume: action.volume };
      }

    case 'TOGGLE_KEEP_SCREEN_AWAKE':
      return { ...state, keepScreenAwake: !state.keepScreenAwake };

    case 'SET_THEME': {
      return {
        ...state,
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

    case 'SET_FIRST_RUN_TO_FALSE':
      return { ...state, firstRun: false };

    default:
      return state;
  }
};
