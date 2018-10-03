import { connect } from 'react-redux';

import { setTimer, togglePaused, toggleSoundPlaying } from '../../../actions';

import { Timer } from '../components/Timer';

const mapStateToProps = state => ({
  session: state.session.session,
  minutes: state.timer.minutes,
  seconds: state.timer.seconds,
  isPaused: state.timer.isPaused,
  workTime: state.times.workTime,
  shortBreakTime: state.times.shortBreakTime,
  longBreakTime: state.times.longBreakTime,
  soundIsPlaying: state.sound.soundIsPlaying,
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  setTimer: minutes => dispatch(setTimer(minutes)),
  togglePaused: () => dispatch(togglePaused()),
  toggleSoundPlaying: () => dispatch(toggleSoundPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
