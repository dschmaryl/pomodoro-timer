import { connect } from 'react-redux';

import { Tick } from '../components/Tick';

const mapStateToProps = state => ({
  playTicks: !state.timer.isPaused && state.settings.tickIsEnabled,
  tickVolume: state.settings.tickVolume,
  tickSoundIndex: state.settings.tickSoundIndex,
  seconds: state.timer.seconds,
  appState: state.timer.appState
});

export default connect(mapStateToProps)(Tick);
