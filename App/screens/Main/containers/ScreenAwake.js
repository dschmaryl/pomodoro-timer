import { connect } from 'react-redux';

import { ScreenAwake } from '../components/ScreenAwake';

const mapStateToProps = state => ({
  isPaused: state.timer.isPaused,
  soundIsPlaying: state.sound.soundIsPlaying,
  keepScreenAwake: state.screen.keepScreenAwake
});

export default connect(mapStateToProps)(ScreenAwake);