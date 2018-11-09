import { connect } from 'react-redux';

import { showPicker } from '../../../actions/picker';

import { Adjuster } from '../components/Adjuster'

const mapStateToProps = state => ({
  label: 'Alarm sound',
  value: state.settings.alarmSound,
  disabled: !state.settings.alarmIsEnabled,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onPress: () => dispatch(showPicker('alarmSound'))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adjuster);
