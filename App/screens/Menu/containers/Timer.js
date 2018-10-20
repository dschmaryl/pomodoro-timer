import { connect } from 'react-redux';

import {
  resetTime,
  togglePaused,
  toggleSoundPlaying
} from '../../../actions';

import { Timer } from '../components/Timer';

const mapStateToProps = state => ({
  minutes: state.timer.minutes,
  seconds: state.timer.seconds,
  isPaused: state.timer.isPaused,
  soundIsPlaying: state.sound.soundIsPlaying,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  resetTime: () => dispatch(resetTime()),
  togglePaused: () => dispatch(togglePaused()),
  toggleSoundPlaying: () => dispatch(toggleSoundPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
