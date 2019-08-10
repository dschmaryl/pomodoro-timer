import { connect } from 'react-redux';

import { togglePaused, toggleAlarmIsPlaying } from '../../../actions/timer';
import { MainButton } from '../components/MainButton';

const mapStateToProps = state => ({
  isPaused: state.timer.isPaused,
  alarmIsPlaying: state.timer.alarmIsPlaying,
  showPauseButton: state.settings.showPauseButton,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  togglePaused: () => dispatch(togglePaused()),
  toggleAlarmIsPlaying: () => dispatch(toggleAlarmIsPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainButton);
