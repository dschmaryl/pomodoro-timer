import { connect } from 'react-redux';

import { Tick } from '../components/Tick';

const mapStateToProps = state => ({
  tickVolume: state.settings.tickVolume,
  tickSoundIndex: state.settings.tickSoundIndex,
  playTicks:
    state.settings.tickIsEnabled &&
    !state.timer.isPaused &&
    (state.settings.runInBackground || state.timer.appState === 'active'),
  appState: state.timer.appState,
  seconds: state.timer.seconds
});

export default connect(mapStateToProps)(Tick);
