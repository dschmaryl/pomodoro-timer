import { connect } from 'react-redux';

import { toggleKeepScreenAwake } from '../../../actions';

import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Keep screen awake',
  isOn: state.settings.keepScreenAwake,
  colors: state.theme.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleKeepScreenAwake())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
