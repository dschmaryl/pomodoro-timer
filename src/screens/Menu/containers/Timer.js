import { connect } from 'react-redux';

import {
  resetTime,
  togglePaused,
  toggleAlarmIsPlaying
} from '../../../actions/timer';
import { Timer } from '../components/Timer';

const mapStateToProps = state => ({
  isPaused: state.timer.isPaused,
  alarmIsPlaying: state.timer.alarmIsPlaying,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  resetTime: () => dispatch(resetTime()),
  togglePaused: () => dispatch(togglePaused()),
  toggleAlarmIsPlaying: () => dispatch(toggleAlarmIsPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
