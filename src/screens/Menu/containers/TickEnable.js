import { connect } from 'react-redux';

import { toggleTickEnabled } from '../../../actions/settings';

import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Tick sound enabled',
  isOn: state.settings.tickIsEnabled,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleTickEnabled())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
