import { connect } from 'react-redux';

import {
  setTimer,
  resetTimer,
  togglePaused,
  finishSession,
  backOneSession,
  decreaseWorkTime,
  increaseWorkTime,
  decreaseShortBreakTime,
  increaseShortBreakTime,
  decreaseLongBreakTime,
  increaseLongBreakTime,
  toggleSoundEnabled,
  decreaseVolume,
  increaseVolume,
  toggleSound,
  setTheme,
  toggleLightDark,
  toggleKeepScreenAwake
} from '../../actions';

import { Settings } from './Settings';

const mapStateToProps = state => ({
  pomodoro: state.session.pomodoro,
  session: state.session.session,
  sessionString: state.session.sessionString,
  minutes: state.timer.minutes,
  timeLeft: state.timer.timeLeft,
  isPaused: state.timer.isPaused,
  isFinished: state.timer.isFinished,
  workTime: state.times.workTime,
  shortBreakTime: state.times.shortBreakTime,
  longBreakTime: state.times.longBreakTime,
  soundIsEnabled: state.sound.soundIsEnabled,
  volume: state.sound.volume,
  soundIsPlaying: state.sound.soundIsPlaying,
  theme: state.colors.theme,
  lightDark: state.colors.lightDark,
  colors: state.colors.colors,
  keepScreenAwake: state.screen.keepScreenAwake
});

mapDispatchToProps = dispatch => ({
  setTimer: minutes => dispatch(setTimer(minutes)),
  resetTimer: () => dispatch(resetTimer()),
  togglePaused: () => dispatch(togglePaused()),
  finishSession: () => dispatch(finishSession()),
  backOneSession: () => dispatch(backOneSession()),
  decreaseWorkTime: () => dispatch(decreaseWorkTime()),
  increaseWorkTime: () => dispatch(increaseWorkTime()),
  decreaseShortBreakTime: () => dispatch(decreaseShortBreakTime()),
  increaseShortBreakTime: () => dispatch(increaseShortBreakTime()),
  decreaseLongBreakTime: () => dispatch(decreaseLongBreakTime()),
  increaseLongBreakTime: () => dispatch(increaseLongBreakTime()),
  toggleSoundEnabled: () => dispatch(toggleSoundEnabled()),
  decreaseVolume: () => dispatch(decreaseVolume()),
  increaseVolume: () => dispatch(increaseVolume()),
  toggleSound: () => dispatch(toggleSound()),
  setTheme: theme => dispatch(setTheme(theme)),
  toggleLightDark: () => dispatch(toggleLightDark()),
  toggleKeepScreenAwake: () => dispatch(toggleKeepScreenAwake())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
