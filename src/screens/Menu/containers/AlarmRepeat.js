import { connect } from 'react-redux';

import { toggleAlarmRepeat } from '../../../actions/settings';
import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Repeat alarm indefinitely',
  isOn: state.settings.alarmRepeat,
  disabled: !state.settings.alarmIsEnabled,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleAlarmRepeat())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
