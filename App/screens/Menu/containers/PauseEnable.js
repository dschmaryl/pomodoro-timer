import { connect } from 'react-redux';

import { togglePauseAtSessionEnd } from '../../../actions';

import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Pause at session end',
  isOn: state.session.pauseAtSessionEnd,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(togglePauseAtSessionEnd())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
