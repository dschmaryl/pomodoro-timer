import { connect } from 'react-redux';

import { toggleDarkMode } from '../../../actions';

import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Dark mode',
  isOn: state.theme.darkMode,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleDarkMode())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
