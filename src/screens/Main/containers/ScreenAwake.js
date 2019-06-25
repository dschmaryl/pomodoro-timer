import { connect } from 'react-redux';

import { ScreenAwake } from '../components/ScreenAwake';

const mapStateToProps = state => ({
  keepScreenAwake:
    state.settings.keepScreenAwake &&
    (!state.timer.isPaused || state.timer.alarmIsPlaying)
});

export default connect(mapStateToProps)(ScreenAwake);
