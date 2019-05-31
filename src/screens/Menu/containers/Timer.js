import { connect } from 'react-redux';

import {
  resetTime,
  togglePaused,
  toggleSessionEnded
} from '../../../actions/timer';
import { Timer } from '../components/Timer';

const mapStateToProps = state => ({
  isPaused: state.timer.isPaused,
  alarmIsPlaying: state.timer.sessionEnded,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  resetTime: () => dispatch(resetTime()),
  togglePaused: () => dispatch(togglePaused()),
  toggleSessionEnded: () => dispatch(toggleSessionEnded())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
