import { connect } from 'react-redux';

import {
  setTimer,
  togglePaused,
  timerTick,
  finishSession,
  toggleSoundPlaying
} from '../../actions';

import { Timer } from './Timer';

const mapStateToProps = state => ({
  workTime: state.times.workTime,
  shortBreakTime: state.times.shortBreakTime,
  longBreakTime: state.times.longBreakTime,
  session: state.session.session,
  sessionString: state.session.sessionString,
  endTime: state.timer.endTime,
  timeLeft: state.timer.timeLeft,
  isPaused: state.timer.isPaused,
  isFinished: state.timer.isFinished,
  volume: state.sound.volume,
  soundIsEnabled: state.sound.soundIsEnabled,
  soundIsPlaying: state.sound.soundIsPlaying,
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  setTimer: minutes => dispatch(setTimer(minutes)),
  togglePaused: () => dispatch(togglePaused()),
  timerTick: () => dispatch(timerTick()),
  finishSession: () => dispatch(finishSession()),
  toggleSoundPlaying: () => dispatch(toggleSoundPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
