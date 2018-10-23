import { connect } from 'react-redux';

import {
  resetTime,
  togglePaused,
  toggleAlarmPlaying
} from '../../../actions';

import { Timer } from '../components/Timer';

const mapStateToProps = state => ({
  minutes: state.timer.minutes,
  seconds: state.timer.seconds,
  isPaused: state.timer.isPaused,
  alarmIsPlaying: state.timer.alarmIsPlaying,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  resetTime: () => dispatch(resetTime()),
  togglePaused: () => dispatch(togglePaused()),
  toggleAlarmPlaying: () => dispatch(toggleAlarmPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
