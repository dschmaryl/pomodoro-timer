import { connect } from 'react-redux';

import { togglePauseAtSessionEnd } from '../../../actions/settings';

import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Pause at session end',
  isOn: state.settings.pauseAtSessionEnd,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(togglePauseAtSessionEnd())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
