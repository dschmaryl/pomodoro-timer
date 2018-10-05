import { connect } from 'react-redux';

import { Alarm } from '../components/Alarm';

const mapStateToProps = state => ({
  volume: state.sound.volume,
  soundIsEnabled: state.sound.soundIsEnabled,
  soundIsPlaying: state.sound.soundIsPlaying
});

export default connect(mapStateToProps)(Alarm);
