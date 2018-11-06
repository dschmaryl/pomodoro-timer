import { connect } from 'react-redux';

import { ScreenAwake } from '../components/ScreenAwake';

const mapStateToProps = state => ({
  isPaused: state.timer.isPaused,
  alarmIsPlaying: state.timer.alarmIsPlaying,
  keepScreenAwake: state.settings.keepScreenAwake
});

export default connect(mapStateToProps)(ScreenAwake);
