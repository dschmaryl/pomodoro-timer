import { connect } from 'react-redux';

import { toggleNotificationEnabled } from '../../../actions';

import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Background timer notifications',
  isOn: state.settings.notificationIsEnabled,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleNotificationEnabled())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
