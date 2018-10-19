import { connect } from 'react-redux';

import { toggleShowPauseButton } from '../../../actions';

import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Pausable from main screen',
  isOn: state.settings.showPauseButton,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleShowPauseButton())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
