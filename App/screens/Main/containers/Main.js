import { connect } from 'react-redux';

import {
  togglePaused,
  updateTime,
  finishSession,
  toggleSoundPlaying
} from '../../../actions';

import { Main } from '../components/Main';

const mapStateToProps = state => ({
  endTime: state.timer.endTime,
  isPaused: state.timer.isPaused,
  pauseAtSessionEnd: state.settings.pauseAtSessionEnd,
  soundIsEnabled: state.settings.soundIsEnabled,
  soundIsPlaying: state.sound.soundIsPlaying,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  togglePaused: () => dispatch(togglePaused()),
  updateTime: (minutes, seconds) => dispatch(updateTime(minutes, seconds)),
  finishSession: isPaused => dispatch(finishSession(isPaused)),
  toggleSoundPlaying: () => dispatch(toggleSoundPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
