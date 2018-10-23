import { connect } from 'react-redux';

import { showPicker } from '../../../actions';

import { Adjuster } from '../components/Adjuster';

const mapStateToProps = state => ({
  label: 'Alarm volume',
  value: state.settings.alarmVolume,
  valueLabel: ' %',
  disabled: !state.settings.alarmIsEnabled,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onPress: oldValue => dispatch(showPicker('alarmVolume', oldValue))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
