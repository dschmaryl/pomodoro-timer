import { connect } from 'react-redux';

import { Alarm } from '../components/Alarm';

const mapStateToProps = state => ({
  volume: state.sound.volume,
  soundIsPlaying: state.sound.soundIsPlaying
});

export default connect(mapStateToProps)(Alarm);
