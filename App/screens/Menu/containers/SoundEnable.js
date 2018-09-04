import { connect } from 'react-redux';

import { toggleSoundEnabled } from '../../../actions';

import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Sound enabled',
  isOn: state.sound.soundIsEnabled,
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleSoundEnabled())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
