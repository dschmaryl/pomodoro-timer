import { connect } from 'react-redux';

import { toggleKeepScreenAwake } from '../../../actions';

import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Keep screen awake',
  isOn: state.screen.keepScreenAwake,
  colors: state.colors.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleKeepScreenAwake())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
