import { connect } from 'react-redux';

import { toggleNotificationEnabled } from '../../../actions/settings';
import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Background timer notifications',
  isOn: state.settings.notificationIsEnabled,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleNotificationEnabled())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
