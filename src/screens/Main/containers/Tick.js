import { connect } from 'react-redux';

import { Tick } from '../components/Tick';

const mapStateToProps = state => ({
  playTicks:
    !state.timer.isPaused &&
    state.settings.tickIsEnabled &&
    (state.settings.runInBackground || state.timer.appState === 'active'),
  tickVolume: state.settings.tickVolume,
  tickSoundIndex: state.settings.tickSoundIndex,
  seconds: state.timer.seconds
});

export default connect(mapStateToProps)(Tick);
