import { connect } from 'react-redux';

import { toggleSessionEnded } from '../../../actions/timer';

import { Alarm } from '../components/Alarm';

const mapStateToProps = state => ({
  alarmVolume: state.settings.alarmVolume,
  alarmSoundIndex: state.settings.alarmSoundIndex,
  alarmRepeat: state.settings.alarmRepeat,
  alarmIsPlaying:
    state.timer.sessionEnded &&
    state.settings.alarmIsEnabled &&
    (state.timer.appState === 'active' || state.settings.runInBackground)
});

const mapDispatchToProps = dispatch => ({
  toggleSessionEnded: () => dispatch(toggleSessionEnded())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alarm);
