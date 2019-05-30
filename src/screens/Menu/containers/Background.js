import { connect } from 'react-redux';

import { toggleRunInBackground } from '../../../actions/settings';
import { Switcher } from '../components/Switcher';

const mapStateToProps = state => ({
  label: 'Run timer when in background',
  isOn: state.settings.runInBackground,
  colors: state.settings.colors
});

mapDispatchToProps = dispatch => ({
  onToggle: () => dispatch(toggleRunInBackground())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switcher);
