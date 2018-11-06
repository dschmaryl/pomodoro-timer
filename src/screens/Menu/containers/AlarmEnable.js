import { connect } from 'react-redux';

import { toggleAlarmEnabled } from '../../../actions/settings';

import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Alarm sound enabled',
  isOn: state.settings.alarmIsEnabled,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleAlarmEnabled())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
