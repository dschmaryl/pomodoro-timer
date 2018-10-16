import { connect } from 'react-redux';

import { togglePaused, toggleSoundPlaying } from '../../../actions';

import { MainButton } from '../components/MainButton';

const mapStateToProps = state => ({
  isPaused: state.timer.isPaused,
  soundIsPlaying: state.sound.soundIsPlaying,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  togglePaused: () => dispatch(togglePaused()),
  toggleSoundPlaying: () => dispatch(toggleSoundPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainButton);
