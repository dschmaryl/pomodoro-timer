import { connect } from 'react-redux';

import { toggleAlarmPlaying } from '../../../actions';

import { Alarm } from '../components/Alarm';

const mapStateToProps = state => ({
  alarmVolume: state.settings.alarmVolume,
  alarmIsPlaying: state.timer.alarmIsPlaying
});

const mapDispatchToProps = dispatch => ({
  toggleAlarmPlaying: () => dispatch(toggleAlarmPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alarm);
