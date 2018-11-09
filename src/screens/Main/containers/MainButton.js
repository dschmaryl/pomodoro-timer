import { connect } from 'react-redux';

import { togglePaused, toggleAlarmPlaying } from '../../../actions/timer';

import { MainButton } from '../components/MainButton';

const mapStateToProps = state => ({
  isPaused: state.timer.isPaused,
  alarmIsPlaying: state.timer.alarmIsPlaying,
  showPauseButton: state.settings.showPauseButton,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  togglePaused: () => dispatch(togglePaused()),
  toggleAlarmPlaying: () => dispatch(toggleAlarmPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainButton);
