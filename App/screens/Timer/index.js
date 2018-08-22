import { connect } from 'react-redux';

import {
  setTimer,
  togglePaused,
  timerTick,
  finishSession,
  toggleSound
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
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  setTimer: minutes => dispatch(setTimer(minutes)),
  togglePaused: () => dispatch(togglePaused()),
  timerTick: () => dispatch(timerTick()),
  finishSession: () => dispatch(finishSession()),
  toggleSound: () => dispatch(toggleSound())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
