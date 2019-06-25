import { connect } from 'react-redux';

import { tickSounds } from '../../../sounds';
import { showPicker } from '../../../actions/picker';
import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Tick sound',
  value: tickSounds[state.settings.tickSoundIndex].name,
  disabled: !state.settings.tickIsEnabled,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(showPicker('tickSound'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
