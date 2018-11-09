import { connect } from 'react-redux';

import { sounds } from '../../../sounds';
import { showPicker } from '../../../actions/picker';
import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Alarm sound',
  value: sounds.alarmSounds[state.settings.alarmSoundIndex].name,
  disabled: !state.settings.alarmIsEnabled,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(showPicker('alarmSound'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
