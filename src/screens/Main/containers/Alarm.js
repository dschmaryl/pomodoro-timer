import { connect } from 'react-redux';

import { toggleAlarmIsPlaying } from '../../../actions/timer';

import { Alarm } from '../components/Alarm';

const mapStateToProps = state => ({
  alarmVolume: state.settings.alarmVolume,
  alarmSoundIndex: state.settings.alarmSoundIndex,
  alarmRepeat: state.settings.alarmRepeat,
  alarmIsPlaying: state.settings.alarmIsEnabled && state.timer.alarmIsPlaying
});

const mapDispatchToProps = dispatch => ({
  toggleAlarmIsPlaying: () => dispatch(toggleAlarmIsPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alarm);
