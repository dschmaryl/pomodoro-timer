import { connect } from 'react-redux';

import { Tick } from '../components/Tick';

const mapStateToProps = state => ({
  playTicks: !state.timer.isPaused && state.settings.tickIsEnabled,
  seconds: state.timer.seconds,
  tickVolume: state.settings.tickVolume
});

export default connect(mapStateToProps)(Tick);
