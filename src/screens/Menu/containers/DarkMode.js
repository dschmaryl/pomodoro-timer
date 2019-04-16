import { connect } from 'react-redux';

import { toggleDarkMode } from '../../../actions/settings';
import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Dark mode',
  isOn: state.settings.darkMode,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleDarkMode())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
