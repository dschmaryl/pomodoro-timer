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
  toggleTheme
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
  soundEnabled: state.sound.soundEnabled,
  volume: state.sound.volume,
  soundIsPlaying: state.sound.soundIsPlaying,
  theme: state.colors.theme,
  colors: state.colors.colors
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
  toggleTheme: () => dispatch(toggleTheme())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Settings);
