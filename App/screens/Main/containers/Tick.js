import { connect } from 'react-redux';

import { Tick } from '../components/Tick';

const mapStateToProps = state => ({
  seconds: state.timer.seconds,
  tickIsEnabled: state.settings.tickIsEnabled
});

export default connect(mapStateToProps)(Tick);
