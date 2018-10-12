import { connect } from 'react-redux';

import {
  setTimer,
  togglePaused,
  updateTime,
  finishSession,
  toggleSoundPlaying
} from '../../../actions';

import { Main } from '../components/Main';

const mapStateToProps = state => ({
  workTime: state.times.workTime,
  shortBreakTime: state.times.shortBreakTime,
  longBreakTime: state.times.longBreakTime,
  session: state.session.session,
  sessionString: state.session.sessionString,
  endTime: state.timer.endTime,
  timeLeft: state.timer.timeLeft,
  minutes: state.timer.minutes,
  seconds: state.timer.seconds,
  isPaused: state.timer.isPaused,
  pauseAtSessionEnd: state.session.pauseAtSessionEnd,
  soundIsPlaying: state.sound.soundIsPlaying,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  setTimer: (minutes, seconds) => dispatch(setTimer(minutes, seconds)),
  togglePaused: () => dispatch(togglePaused()),
  updateTime: (minutes, seconds) => dispatch(updateTime(minutes, seconds)),
  finishSession: () => dispatch(finishSession()),
  toggleSoundPlaying: () => dispatch(toggleSoundPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
