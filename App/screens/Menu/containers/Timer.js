import { connect } from 'react-redux';

import { setTimer, togglePaused, toggleSoundPlaying } from '../../../actions';

import { Timer } from '../components/Timer';

const mapStateToProps = state => ({
  session: state.session.session,
  minutes: state.timer.minutes,
  seconds: state.timer.seconds,
  isPaused: state.timer.isPaused,
  focusTime: state.session.focusTime,
  shortBreakTime: state.session.shortBreakTime,
  longBreakTime: state.session.longBreakTime,
  soundIsPlaying: state.sound.soundIsPlaying,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  setTimer: (minutes, seconds) => dispatch(setTimer(minutes, seconds)),
  togglePaused: () => dispatch(togglePaused()),
  toggleSoundPlaying: () => dispatch(toggleSoundPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
