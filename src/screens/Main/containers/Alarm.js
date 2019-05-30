import { connect } from 'react-redux';

import { toggleAlarmPlaying } from '../../../actions/timer';
import { Alarm } from '../components/Alarm';

const mapStateToProps = state => ({
  alarmVolume: state.settings.alarmVolume,
  alarmSoundIndex: state.settings.alarmSoundIndex,
  alarmRepeat: state.settings.alarmRepeat,
  alarmIsPlaying: state.timer.alarmIsPlaying
});

const mapDispatchToProps = dispatch => ({
  toggleAlarmPlaying: () => dispatch(toggleAlarmPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alarm);
