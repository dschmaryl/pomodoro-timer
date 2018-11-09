import { connect } from 'react-redux';

import { toggleShowPauseButton } from '../../../actions/settings';

import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Pausable from main screen',
  isOn: state.settings.showPauseButton,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleShowPauseButton())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
