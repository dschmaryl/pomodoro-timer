import { connect } from 'react-redux';

import { Tick } from '../components/Tick';

const mapStateToProps = state => ({
  isPaused: state.timer.isPaused,
  seconds: state.timer.seconds,
  tickIsEnabled: state.settings.tickIsEnabled,
  tickVolume: state.settings.tickVolume
});

export default connect(mapStateToProps)(Tick);
