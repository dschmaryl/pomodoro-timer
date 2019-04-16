import { connect } from 'react-redux';

import { showPicker } from '../../../actions/picker';
import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Tick volume',
  value: state.settings.tickVolume,
  valueLabel: ' %',
  disabled: !state.settings.tickIsEnabled,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onPress: oldValue => dispatch(showPicker('tickVolume', oldValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
