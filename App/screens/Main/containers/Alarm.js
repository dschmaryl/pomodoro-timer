import { connect } from 'react-redux';

import { toggleSoundPlaying } from '../../../actions';

import { Alarm } from '../components/Alarm';

const mapStateToProps = state => ({
  volume: state.settings.volume,
  soundIsPlaying: state.sound.soundIsPlaying
});

const mapDispatchToProps = dispatch => ({
  toggleSoundPlaying: () => dispatch(toggleSoundPlaying())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Alarm);
