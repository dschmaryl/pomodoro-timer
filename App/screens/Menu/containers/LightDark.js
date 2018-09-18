import { connect } from 'react-redux';

import { toggleDarkMode } from '../../../actions';

import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Dark mode',
  isOn: state.colors.darkMode,
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleDarkMode())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
