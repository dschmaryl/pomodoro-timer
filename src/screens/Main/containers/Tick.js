import { connect } from 'react-redux';

import { Tick } from '../components/Tick';

const mapStateToProps = state => ({
  tickVolume: state.settings.tickVolume,
  tickSoundIndex: state.settings.tickSoundIndex,
  playTicks:
    state.settings.tickIsEnabled &&
    !state.timer.tickIsMuted &&
    !state.timer.alarmIsPlaying &&
    !state.timer.isPaused,
  seconds: state.timer.seconds
});

export default connect(mapStateToProps)(Tick);
